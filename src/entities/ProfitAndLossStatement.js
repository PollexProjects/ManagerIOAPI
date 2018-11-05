import BusinessEntity from './BusinessEntity';

export default class ProfitAndLossStatement extends BusinessEntity {

    static GetEntityName() {
        return 'ProfitAndLossStatement';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
