import BusinessEntity from './BusinessEntity';

export default class SalesInvoice extends BusinessEntity {

    static GetEntityName() {
        return 'SalesInvoice';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
