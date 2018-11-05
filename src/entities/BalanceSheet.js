import BusinessEntity from './BusinessEntity';

export default class BalanceSheet extends BusinessEntity {

    static GetEntityName() {
        return 'BalanceSheet';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
