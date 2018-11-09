const moment = require('moment');

import camelcase from 'camelcase';

import SwapKV from '../utilities/SwapKV';
import {
    EntityDoesNotSupportCreationError,
    NotImplementedInEntityError
} from '../errors';

export default class ManagerEntity {

    /*
     * Constants
     */
    static get PropertyMap() {
        // If _extraPropertyMap is not defined then define it,
        // this also means this is the first call to this function
        if (!this._ExtraPropertyMap) {
            this._ExtraPropertyMap = {
                // Spread entity' property map
                ...this.ExtraPropertyMap,
                // Swap key values and spread it as well
                ...SwapKV(this.ExtraPropertyMap)
            };
        }

        return {
            // Hardcoded mapping
            id: 'Key',
            Key: 'id',
            updatedAt: 'Timestamp',
            Timestamp: 'updatedAt',
            // Overwrite with entity defined map
            ...this._extraPropertyMap
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

        // Ensure that the 'update' is newer
        if (this.updatedAt && this.updatedAt >= moment(data[properties['updatedAt']])) return false;

        for (var key in data) {
            this[camelcase(key)] = data[key];
        }

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
        return broker.getEntity({ entityType: this, id });
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
        throw new NotImplementedInEntityError('Entity class is responsible for implementing resource path resolving');
    }

    /**
     * Returns the entity' name, which is used to resolve the url
     */
    static GetEntityName() {
        return new NotImplementedInEntityError();
    }

    static GetIdPropertyName() {
        return 'id';
    }

}
