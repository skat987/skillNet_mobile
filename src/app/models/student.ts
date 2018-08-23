// Models
import { User } from './user';
import { ProgressionTotal } from './progression-total';

// Env
import { environment } from '../../environments/environment';
const _APP_IMG_URL = environment.appImageUrl;

export class Student extends User {
    studentId: any;
    formationId: any;
    progression: ProgressionTotal;

    // tslint:disable-next-line:max-line-length
    constructor (id?: any, lastName?: any, firstName?: any, avatar?: any, email?: any, gender?: any, birthDate?: any, phone?: any, token?: any, studentId?: any, formationId?: any, progression?: ProgressionTotal) {
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
        this.user_type_id = 3;
        this.studentId = studentId;
        this.formationId = formationId;
        this.progression = progression;
    }
}
