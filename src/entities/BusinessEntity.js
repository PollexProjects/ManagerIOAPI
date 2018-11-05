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
