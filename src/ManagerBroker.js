const Axios = require('axios');

export default class ManagerBroker {

    /**
     * The ManagerBroker is responsible for final communication between the API
     * and the interface
     * @param {string}  username            Your ManagerIO admin username
     * @param {string}  password            Your ManagerIO admin password
     * @param {string}  businesses          The business to use. Leave empty to resolve businesses
     */
    constructor(server, username, password, business = undefined) {
        this.apiBase = server;

        // If a business is defined, then this broker is set
        // This functionality is purely for convenience, otherwise every
        // Get and GetAll on entities had to provide business IDs
        if (business) {
            this.business = business;
        }

        this.axios = Axios.create({
            baseURL: this.apiBase,
            auth: {
                username,
                password
            }
        });
    }

    /**
     * Fetches all or a single ManagerEntity from the API
     * @param  {ManagerEntity}  entityType    The entity to fetch
     * @param  {UUID}  id                   Optional ID will fetch a specific entity
     * @return {Promise}                    Promise resolving in the given resource
     */
    async getEntity({ entityType, ...specifiers }) {
        // TODO: catch errors
        // Provides every resource path with the business id if possible.
        const { data } = await this.getResource(entityType.GetResourcePath({ business: this.business, ...specifiers }));
        // Map ids
        if (Array.isArray(data)) {
            if (data.length == 0) {
                throw new Error('Malformed data received');
            }
            // If we receive an array of objects, we assume they are resolved
            // entities
            if (typeof(data[0]) === 'object') {
                return data.map(el => new entityType({
                    broker: this,
                    business: this.business,
                    data: el,
                    ...specifiers
                }));
            } else {
            // Otherwise we assume they are IDs
                const identifiedEntities = data.map(
                    id => new entityType({
                        broker: this,
                        business: this.business,
                        id,
                        ...specifiers
                    })
                );
                return Promise.all(identifiedEntities.map(entity => entity.get()));
            }
        } else {
            return new entityType({
                broker: this,
                business: this.business,
                data,
                ...specifiers });
        }
    }

    getResource(path) {
        // TODO: catch errors
        return this.axios.get(path);
    }

    postResource(path, body) {
        return this.axios.post(path, body);
    }


    // Getter setters
    get set() {
        return !!this.business;
    }
}
