import BusinessEntity from './BusinessEntity';

export default class StatementOfChangesInEquity extends BusinessEntity {

    static GetEntityName() {
        return 'StatementOfChangesInEquity';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
