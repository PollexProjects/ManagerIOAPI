import BusinessEntity from './BusinessEntity';

export default class StartDate extends BusinessEntity {

    static GetEntityName() {
        return 'StartDate';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
