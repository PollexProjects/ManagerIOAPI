import BusinessEntity from './BusinessEntity';

export default class BusinessDetails extends BusinessEntity {

    static GetEntityName() {
        return 'BusinessDetails';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
