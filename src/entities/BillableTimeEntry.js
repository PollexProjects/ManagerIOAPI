import BusinessEntity from './BusinessEntity';

export default class BillableTimeEntry extends BusinessEntity {

    static GetEntityName() {
        return 'BillableTimeEntry';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
