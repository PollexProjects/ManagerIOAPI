import BusinessEntity from './BusinessEntity';

export default class RecurringSalesInvoice extends BusinessEntity {

    static GetEntityName() {
        return 'RecurringSalesInvoice';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
