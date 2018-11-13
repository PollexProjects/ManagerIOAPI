import ManagerEntity from './ManagerEntity';
import Urls from './EntityUrls';

export default class BusinessEntity extends ManagerEntity {

    constructor({ broker, id, data, business }) {
        super({ broker, id, data });
        this.business = business;
    }

    get() {
        return this.constructor.Get(this.id, this.business, this.broker);
    }

    /**
     * Spawns an entity that lives in the same context as the entity it is
     * spawned from, meaning it has the same broker and business.
     * @param  {class} ctor      The entity to spawn
     * @param  {object|string} otherOrId Either the entity id or an object containing more than one property
     * @return {Object}           Instance of @ctor
     */
    spawn(ctor, otherOrId) {
        // base properties
        let properties = {
            broker: this.broker,
            business: this.business
        };

        // If parameter is string then assign as id, otherwise spread
        if (typeof(otherOrId) === 'string') {
            properties.id = otherOrId;
        } else {
            properties = {
                ...properties,
                ...otherOrId
            };
        }
        // Instantiate new ctor
        return new ctor(properties);
    }

    static GetResourcePath({ id, business }) {
        if (id) {
            return `/${business}/${id}.json`;
        }
        return `/${business}/${Urls[this.GetEntityName()]}/index.json`;
    }

    // static
    static Get(id, business, broker) {
        return broker.getEntity({ entityType: this, id, business });
    }

    /**
    * Get and resolve all of this entities from a broker
    * @param {ManagerBroker} broker The broker to use
    */
    static GetAll(business, broker) {
        return broker.getEntity({ entityType: this, business });
    }
}
