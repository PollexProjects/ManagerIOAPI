import ManagerEntity from './ManagerEntity';

export default class Business extends ManagerEntity {

    static GetResourcePath() {
        return '/index.json';
    }

    get() {
        return this.constructor.Get(this.id, this.broker);
    }

    /*
    Business entities are tough. The endpoint is inconsistent with the rest of
    the API. Therefore when we try to 'update' one business. We actually get an
    array of all the businesses and we have to filter out 'this' business.
    As a follow up, to make things worse, it is not possible to create a business
    purely on data from the API, thy first retrieve it's id, before updating the
    Business entity.
     */
    update(data) {
        if (!super.update(data)) return;
        this.id = data.Key;
        this.name = data.Name;
    }

    static async Get(id, broker) {
        // XXX: Workaround to have atleast something working
        const businesses = await this.GetAll(broker);
        return businesses.filter(el => el.Key === this.id)[0];
    }

}
