// Env
import { environment } from '../../environments/environment';
const _APP_CALENDAR_URL = environment.appCalendarUrl;

export class Planning {
    id: any;
    name: any;
    url: any;
    formationId: any;
    createdAt: any;
    updatedAt: any;

    constructor (id?: any, name?: any, url?: any, formationId?: any, createdAt?: any, updatedAt?: any) {
        this.id = id;
        this.name = name;
        this.url = _APP_CALENDAR_URL + url;
        this.formationId = formationId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
