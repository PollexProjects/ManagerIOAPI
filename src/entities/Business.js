import ManagerEntity from './ManagerEntity';

export default class Business extends ManagerEntity {

    static GetResourcePath() {
        return '/index.json';
    }

    update(data) {
        if (!super.update(data)) return;
        this.name = data.Name;
    }

}
