import ManagerEntity from './ManagerEntity';

export default class Customer extends ManagerEntity {

    static GetEntityName() {
        return 'Customer';
    }

    update(data) {
        if (!super.update(data)) return;
        this.name = data.Name;
        this.billingAddress = data.BillingAddress;
        this.email = data.Email;
        this.identifier = data.BusinessIdentifier;
        // For each custom field create a CustomField entity
        this.customFields = data.CustomFields;
        this.code = data.Code;
    }

}
