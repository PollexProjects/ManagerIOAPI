import BusinessEntity from './BusinessEntity';

export default class Tabs extends BusinessEntity {

    static GetEntityName() {
        return 'Tabs';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
