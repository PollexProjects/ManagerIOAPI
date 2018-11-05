import BusinessEntity from './BusinessEntity';

export default class BalanceSheetAccount extends BusinessEntity {

    static GetEntityName() {
        return 'BalanceSheetAccount';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
