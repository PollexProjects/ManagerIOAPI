import BusinessEntity from './BusinessEntity';
import BankAccount from './BankAccount';

export default class BankReconciliationBalance extends BusinessEntity {

    static GetEntityName() {
        return 'BankReconciliationBalance';
    }

    update(data) {
        if (!super.update(data)) return;
        this.account = this.spawn(BankAccount, this.account);
    }

}
