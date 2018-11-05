import BusinessEntity from './BusinessEntity';

export default class InterAccountTransfer extends BusinessEntity {

    static GetEntityName() {
        return 'InterAccountTransfer';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
