// Models
import { Teacher } from './teacher';
import { ProgressionDetails } from './progression-details';

export class Skill {
    id: any;
    name: any;
    progression: ProgressionDetails;
    teacher: Teacher;

    constructor (id?: any, name?: any, progression?: ProgressionDetails, teacher?: Teacher) {
        this.id = id;
        this.name = name;
        this.progression = progression;
        this.teacher = teacher;
    }
}
