import BusinessEntity from './BusinessEntity';

export default class ProfitAndLossStatementControlAccount extends BusinessEntity {

    static GetEntityName() {
        return 'ProfitAndLossStatementControlAccount';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
