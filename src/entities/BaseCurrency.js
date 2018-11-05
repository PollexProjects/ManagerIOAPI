import BusinessEntity from './BusinessEntity';

export default class BaseCurrency extends BusinessEntity {

    static GetEntityName() {
        return 'BaseCurrency';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
