import BusinessEntity from './BusinessEntity';

export default class BankReconciliationBalance extends BusinessEntity {

    static GetEntityName() {
        return 'BankReconciliationBalance';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
