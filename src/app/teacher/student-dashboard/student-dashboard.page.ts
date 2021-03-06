import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

// Services
import { ApiService } from '../../service/api/api.service';

// Models
import { Skill } from '../../models/skill';
import { Student } from '../../models/student';
import { Teacher } from '../../models/teacher';
import { ModuleFormation } from '../../models/module-formation';
import { ProgressionTotal } from '../../models/progression-total';
import { ProgressionDetails } from '../../models/progression-details';
@Component({
    selector: 'app-student-dashboard',
    templateUrl: './student-dashboard.page.html',
    styleUrls: ['./student-dashboard.page.scss'],
})
export class StudentDashboardPage implements OnInit {
    public student: Student;
    public modules: ModuleFormation[] = [];
    public moduleSelected: ModuleFormation;
    public display: any;
    environment = environment;

    // tslint:disable-next-line:max-line-length
    constructor(private platform: Platform, private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit() {
        // tslint:disable-next-line:max-line-length
        this.platform.ready().then(() => this.setStudent(this.route.snapshot.paramMap.get('student'), this.route.snapshot.paramMap.get('formation')));
    }

    private setStudent(studentId: any, formationId: any): void {
        this.apiService.get('getStudentDatas/' + studentId + '/ofFormation/' + formationId).then((resp: any) => {
            // tslint:disable-next-line:max-line-length
            this.student = new Student(resp['student'].user_id, resp['student'].user_lastname, resp['student'].user_firstname, resp['student'].user_avatar, null, null, null, null, null, null, null, new ProgressionTotal());
            this.student.progression.skillsCount = 0;
            this.student.progression.studentValidations = 0;
            this.student.progression.teacherValidations = 0;
            this.modules = [];
            let currentModule: ModuleFormation;
            for (let i = 0; i < resp['modules'].length; i++) {
                this.student.progression.skillsCount = this.student.progression.skillsCount + resp['modules'][i].totalSkills;
                // tslint:disable-next-line:max-line-length
                this.student.progression.studentValidations = this.student.progression.studentValidations + resp['modules'][i].progression.student;
                // tslint:disable-next-line:max-line-length
                this.student.progression.teacherValidations = this.student.progression.teacherValidations + resp['modules'][i].progression.teacher;
                // tslint:disable-next-line:max-line-length
                currentModule = new ModuleFormation(resp['modules'][i].id, resp['modules'][i].name, new ProgressionTotal(resp['modules'][i].totalSkills, resp['modules'][i].progression.student, resp['modules'][i].progression.teacher));
                for (let j = 0; j < resp['modules'][i].skills.length; j++) {
                    // tslint:disable-next-line:max-line-length
                    currentModule.addSkill(new Skill(resp['modules'][i].skills[j].id, resp['modules'][i].skills[j].name, new ProgressionDetails(resp['modules'][i].skills[j].progression.student_progression_id, resp['modules'][i].skills[j].progression.student_validation, resp['modules'][i].skills[j].progression.student_validation_date, resp['modules'][i].skills[j].progression.teacher_validation, resp['modules'][i].skills[j].progression.teacher_validation_date), new Teacher(null, resp['modules'][i].skills[j].teacher.lastname, resp['modules'][i].skills[j].teacher.firstname)));
                }
                this.modules.push(currentModule);
            }
        }).catch(e => console.log('Error getting student data: ', e));
    }

    public ShowModule(module: ModuleFormation): void {
        if (this.isGroupShown(module)) {
            this.moduleSelected = null;
            this.display = null;
        } else {
            this.moduleSelected = module;
            this.display = 1;
        }
    }

    public isGroupShown(module: ModuleFormation) {
        return this.moduleSelected === module;
    }

    public back() {
        this.display = null;
        this.moduleSelected = null;
    }

    public updateValidation(progressionId: any, validation: any): void {
        this.apiService.put('progression/updateTeacherValidation', { progression_id: progressionId, teacher_validation: validation })
            .then(resp => console.log('update validation: ', resp))
            .catch(e => console.log('Error updating validation: ', e));
    }
}
