import BusinessEntity from './BusinessEntity';

export default class Customer extends BusinessEntity {

    static GetEntityName() {
        return 'Customer';
    }

    update(data) {
        if (!super.update(data)) return;
    }

}
