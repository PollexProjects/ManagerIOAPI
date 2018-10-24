const Axios = require('axios');

export default class ManagerBroker {

    /**
     * The ManagerBroker is responsible for final communication between the API
     * and the interface
     * @param {string}  username            Your ManagerIO admin username
     * @param {string}  password            your ManagerIO admin password
     */
    constructor(username, password) {
        this.apiBase = 'https://manager.pollexprojects.nl/api/';

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
    async getEntity({ entityType, id }) {
        // TODO: catch errors
        const { data } = await this.getResource(entityType.GetResourcePath(id));
        // Map data
        if (Array.isArray(data)) {
            return data.map(
                entity => new entityType({
                    broker: this,
                    data: entity
                })
            );
        } else {
            return new entityType({ broker: this, data });
        }
    }

    /**
     * Fetches all or a single ManagerEntity from the API
     * @param  {ManagerEntity}  resource    The entity to fetch
     * @param  {UUID}  id                   Optional ID will fetch a specific entity
     * @return {Promise}                    Promise resolving in the given resource
     */
    getResource(path) {
        // TODO: catch errors
        return this.axios.get(path);
    }

    postResource(path, body) {
        return this.axios.post(path, body);
    }

}
