import BusinessEntity from './BusinessEntity';

export default class PurchaseInvoice extends BusinessEntity {

    static GetEntityName() {
        return 'PurchaseInvoice';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
