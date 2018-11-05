import BusinessEntity from './BusinessEntity';

export default class Supplier extends BusinessEntity {

    static GetEntityName() {
        return 'Supplier';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
