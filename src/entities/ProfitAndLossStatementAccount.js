import BusinessEntity from './BusinessEntity';

export default class ProfitAndLossStatementAccount extends BusinessEntity {

    static GetEntityName() {
        return 'ProfitAndLossStatementAccount';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
