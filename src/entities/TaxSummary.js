import BusinessEntity from './BusinessEntity';

export default class TaxSummary extends BusinessEntity {

    static GetEntityName() {
        return 'TaxSummary';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
