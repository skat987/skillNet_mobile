// Models
import { User } from './user';
import { Formation } from './formation';

// Env
import { environment } from '../../environments/environment';
const _APP_IMG_URL = environment.appImageUrl;

export class Teacher extends User {
    formations: Formation[] = [];

    // tslint:disable-next-line:max-line-length
    constructor (id?: any, lastName?: any, firstName?: any, avatar?: any, email?: any, gender?: any, birthDate?: any, phone?: any, token?: any) {
        super();
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.fullName = lastName + ' ' + firstName;
        this.avatar = _APP_IMG_URL + avatar;
        this.email = email;
        this.gender = gender;
        this.birthDate = birthDate;
        this.phone = phone;
        this.token = token;
        this.userTypeId = 2;
    }

    public addFormation(formation: Formation): void {
        this.formations.push(formation);
    }

    public getFormationById(formationId: any): Formation {
        return this.formations[this.formations.findIndex((formation) => formation.id === formationId)];
    }
}
