import BusinessEntity from './BusinessEntity';

export default class CustomTaxReport extends BusinessEntity {

    static GetEntityName() {
        return 'CustomTaxReport';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
