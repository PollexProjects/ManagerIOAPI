import BusinessEntity from './BusinessEntity';

export default class EmailTemplate extends BusinessEntity {

    static GetEntityName() {
        return 'EmailTemplate';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
