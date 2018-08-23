// Models
import { Skill } from './skill';
import { ProgressionTotal } from './progression-total';

export class ModuleFormation {
    id: any;
    name: any;
    progression: ProgressionTotal;
    skills: Skill[] = [];

    constructor (id?: any, name?: any, progression?: ProgressionTotal) {
        this.id = id;
        this.name = name;
        this.progression = progression;
    }

    public addSkill(skill: Skill): void {
        this.skills.push(skill);
    }

    public getSkillById(skillId: any): Skill {
        return this.skills[this.skills.findIndex((skill) => skill.id === skillId)];
    }
}
