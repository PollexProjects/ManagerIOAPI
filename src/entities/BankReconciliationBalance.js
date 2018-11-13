import BusinessEntity from './BusinessEntity';
import BankAccount from './BankAccount';

export default class BankReconciliationBalance extends BusinessEntity {

    static GetEntityName() {
        return 'BankReconciliationBalance';
    }

    update(data) {
        if (!super.update(data)) return;
        this.account = new BankAccount({
            broker: this.broker,
            business: this.business,
            id: this.account
        });
    }

}
