import BusinessEntity from './BusinessEntity';

export default class CustomField extends BusinessEntity {

    static GetEntityName() {
        return 'CustomField';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
