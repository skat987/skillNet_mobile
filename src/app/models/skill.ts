// Models
import { ProgressionDetails } from './progression-details';

export class Skill {
    id: any;
    name: any;
    progression: ProgressionDetails;

    constructor (id?: any, name?: any, progression?: ProgressionDetails) {
        this.id = id;
        this.name = name;
        this.progression = progression;
    }
}
