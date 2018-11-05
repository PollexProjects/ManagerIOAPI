import BusinessEntity from './BusinessEntity';

export default class JournalEntry extends BusinessEntity {

    static GetEntityName() {
        return 'JournalEntry';
    }

    update(data) {
        if (!super.update(data)) return;
        // Fill in
    }

}
