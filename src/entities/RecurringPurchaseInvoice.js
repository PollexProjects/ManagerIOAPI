import BusinessEntity from './BusinessEntity';

export default class RecurringPurchaseInvoice extends BusinessEntity {

    static GetEntityName() {
        return 'RecurringPurchaseInvoice';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
