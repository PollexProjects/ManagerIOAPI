import BusinessEntity from './BusinessEntity';

export default class BalanceSheetControlAccount extends BusinessEntity {

    static GetEntityName() {
        return 'BalanceSheetControlAccount';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
