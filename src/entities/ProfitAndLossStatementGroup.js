import BusinessEntity from './BusinessEntity';

export default class ProfitAndLossStatementGroup extends BusinessEntity {

    static GetEntityName() {
        return 'ProfitAndLossStatementGroup';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
