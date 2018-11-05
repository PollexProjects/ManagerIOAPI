import BusinessEntity from './BusinessEntity';

export default class InBuiltTaxCode extends BusinessEntity {

    static GetEntityName() {
        return 'InBuiltTaxCode';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
