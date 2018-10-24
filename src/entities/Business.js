import ManagerEntity from './ManagerEntity';

export default class BusinessEntity extends ManagerEntity {

    static GetResourcePath() {
        return '/index.json';
    }

    update(data) {
        if (!super.update(data)) return;
        this.name = data.name;
    }

}
