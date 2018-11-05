const Axios = require('axios');

export default class ManagerBroker {

    /**
     * The ManagerBroker is responsible for final communication between the API
     * and the interface
     * @param {string}  username            Your ManagerIO admin username
     * @param {string}  password            Your ManagerIO admin password
     */
    constructor(server, username, password) {
        this.apiBase = server;

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
        const { data } = await this.getResource(entityType.GetResourcePath(specifiers));
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
                    data: el,
                    ...specifiers
                }));
            } else {
            // Otherwise we assume they are IDs
                const identifiedEntities = data.map(
                    id => new entityType({
                        broker: this,
                        id,
                        ...specifiers
                    })
                );
                return Promise.all(identifiedEntities.map(entity => entity.get()));
            }
        } else {
            return new entityType({
                broker: this,
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
}
