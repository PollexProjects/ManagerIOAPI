import BusinessEntity from './BusinessEntity';

export default class SummaryStartDate extends BusinessEntity {

    static GetEntityName() {
        return 'SummaryStartDate';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
