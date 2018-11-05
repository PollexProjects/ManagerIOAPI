import BusinessEntity from './BusinessEntity';

export default class CapitalSubaccount extends BusinessEntity {

    static GetEntityName() {
        return 'CapitalSubaccount';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
