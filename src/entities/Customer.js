import ManagerEntity from './ManagerEntity';

export default class BusinessEntity extends ManagerEntity {

    static GetResourcePath() {
        return '/ec37c11e-2b67-49c6-8a58-6eccb7dd75ee/index.json';
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
