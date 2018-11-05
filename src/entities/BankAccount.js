import BusinessEntity from './BusinessEntity';

export default class BankAccount extends BusinessEntity {

    static GetEntityName() {
        return 'BankAccount';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
