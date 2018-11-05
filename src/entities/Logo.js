import BusinessEntity from './BusinessEntity';

export default class Logo extends BusinessEntity {

    static GetEntityName() {
        return 'Logo';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
