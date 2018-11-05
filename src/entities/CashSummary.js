import BusinessEntity from './BusinessEntity';

export default class CashSummary extends BusinessEntity {

    static GetEntityName() {
        return 'CashSummary';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
