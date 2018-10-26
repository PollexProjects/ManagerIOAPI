const moment = require('moment');

import {
    DifferentEntityError,
    EntityDoesNotSupportCreationError,
    NotImplementedInEntityError
} from '../errors';

export default class ManagerEntity {

    /*
     * Constants
     */
    static get PropertyMap() {
        return {
            id: 'Key',
            updatedAt: 'Timestamp'
        };
    }

    /**
     * Provides a base-class for entities in the API.
     * Providing an id will create an unresolved entity, which can be resolved
     * by `.get()`.
     * Providing data will map the APIs response data to this entity.
     * @param {ManagerBroker} broker    The broker to use
     * @param {UUID} id                 The entity's UUID
     * @param {Object} data             The entity's data from the API
     */
    constructor({ broker, id, data }) {
        this.broker = broker;
        this.id = id;
        if (data) {
            this.update(data);
        }
    }

    /**
     * Get this entity from the API
     * @return {ManagerEntity} The resolved entity
     */
    get() {
        return this.constructor.Get(this.id, this.broker);
    }

    /**
     * Updates this entity instance with the given data.
     * @param  {Object} data    The entity's data from the API
     * @return {Boolean}        True if the update was applied
     */
    update(data) {
        const properties = this.constructor.PropertyMap;

        if (this.id && this.id !== data[properties['id']]) throw new DifferentEntityError();
        // Ensure that the 'update' is newer
        if (this.updatedAt && this.updatedAt >= moment(data[properties['updatedAt']])) return false;

        // Update property, in-case id was not set yet.
        this.id = data[properties['id']];
        this.updatedAt = moment(data[properties['updatedAt']]);
        return true;
    }

    //
    // Static methods
    //
    /**
     * Get and resolve an entity by id from a broker
     * @param {UUID} id                 The entity's ID
     * @param {ManagerBroker} broker    The broker to use
     */
    static Get(id, broker) {
        return this.GetAll(broker).filter(el => el.id == id)[0];
    }

    /**
     * Get and resolve all of this entities from a broker
     * @param {ManagerBroker} broker The broker to use
     */
    static GetAll(broker) {
        return broker.getEntity({ entityType: this });
    }

    static Create() {
        throw new EntityDoesNotSupportCreationError();
    }

    /**
     * Provides the entity's resource path on the API URL
     * @param {UUID} id Optional id to get a single entity.
     */
    // eslint-disable-next-line no-unused-vars
    static GetResourcePath(id) {
        throw new NotImplementedInEntityError();
    }

    static GetIdPropertyName() {
        return 'id';
    }

}
