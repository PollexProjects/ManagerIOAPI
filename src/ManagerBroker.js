const Axios = require('axios');

export default class ManagerBroker {

    /**
     * The ManagerBroker is responsible for final communication between the API
     * and the interface
     * @param {string}  username            Your ManagerIO admin username
     * @param {string}  password            Your ManagerIO admin password
     * @param {string}  businesses          The business to use. Leave empty to resolve businesses
     */
    constructor(server, username, password, business = '') {
        this.apiBase = server;

        // If a business is defined, then this broker is set
        if (business) {
            this.set = true;
        }

        this.axios = Axios.create({
            baseURL: this.apiBase + (business ? `/${business}` : ''),
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
    async getEntity({ entityType, id }) {
        // TODO: catch errors
        const { data } = await this.getResource(entityType.GetResourcePath(id));
        // Map ids
        if (Array.isArray(data)) {
            const identifiedEntities = data.map(
                id => new entityType({
                    broker: this,
                    id
                })
            );
            return Promise.all(identifiedEntities.map(entity => entity.get()));
        } else {
            return new entityType({ broker: this, id, data });
        }
    }

    getResource(path) {
        // TODO: catch errors
        return this.axios.get(path);
    }

    postResource(path, body) {
        return this.axios.post(path, body);
    }

}
