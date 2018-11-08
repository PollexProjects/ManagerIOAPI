import BusinessEntity from './BusinessEntity';

export default class Attachment extends BusinessEntity {

    static get PropertyMap() {
        return {
            updatedAt: 'Date'
        };
    }

    static GetEntityName() {
        return 'Attachment';
    }

    update(data) {
        if (!super.update(data)) return;
    }

}
