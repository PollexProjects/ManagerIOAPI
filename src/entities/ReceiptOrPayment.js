import BusinessEntity from './BusinessEntity';

export default class ReceiptOrPayment extends BusinessEntity {

    static GetEntityName() {
        return 'ReceiptOrPayment';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
