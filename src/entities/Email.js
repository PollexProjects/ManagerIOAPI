import BusinessEntity from './BusinessEntity';

export default class Email extends BusinessEntity {

    static GetEntityName() {
        return 'Email';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
