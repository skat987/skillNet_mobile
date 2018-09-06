import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

// Models
import { Skill } from '../../models/skill';
import { Student } from '../../models/student';
import { Formation } from '../../models/formation';
import { ModuleFormation } from '../../models/module-formation';
import { ProgressionTotal } from '../../models/progression-total';
import { ProgressionDetails } from '../../models/progression-details';

// Services
import { AuthService } from '../../service/auth/auth.service';
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public student: Student;
  public formationSelected: Formation;
  public moduleSelected: ModuleFormation;

  constructor(private platform: Platform, private authService: AuthService, private apiService: ApiService) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setStudent());
  }

  private setStudent(): void {
    this.authService.getAuth().then((user: any) => {
      // tslint:disable-next-line:max-line-length
      this.student = new Student(null, user.lastname, user.firstname, user.avatar, user.email, user.gender, user.birthday_date, user.phone_number, user.token, user.student_id, user.formation_id);
    }).then(() => this.setFormations())
    .catch(e => console.log('Error setting student: ', e));
  }

  private setFormations(): void {
    this.apiService.get('studentsFormation').then((resp: any) => {
      for (let i = 0; i < resp.length; i++) {
        // tslint:disable-next-line:max-line-length
        this.student.addFormation(new Formation(resp[i].id, resp[i].name, resp[i].logo, resp[i].start_at, resp[i].end_at, resp[i].created_at, resp[i].updated_at, resp[i].total_students, resp[i].total_teachers, resp[i].total_modules, resp[i].total_skills));
      }
    }).then(() => this.setModules())
    .catch(e => console.log('Error setting formations: ', e));
  }

  private setModules(): void {
    for (let i = 0; i < this.student.formations.length; i++) {
      this.apiService.get('getFormationForAdmin/' + this.student.formations[i].id).then((resp: any) => {
        let currentModule: ModuleFormation;
        for (let j = 0; j < resp.length; j++) {
          // tslint:disable-next-line:max-line-length
          currentModule = new ModuleFormation(resp[j].module.id, resp[j].module.name, new ProgressionTotal(resp[j].module.totalSkills, resp[j].module.progression.student, resp[j].module.progression.teacher));
          for (let k = 0; k < resp[j].module.skills.length; k++) {
            // tslint:disable-next-line:max-line-length
            currentModule.addSkill(new Skill(resp[j].module.skills[k].id, resp[j].module.skills[k].name, new ProgressionDetails(resp[j].module.skills[k].progression.student_progression_id, resp[j].module.skills[k].progression.student_validation, resp[j].module.skills[k].progression.student_validation_date, resp[j].module.skills[k].progression.teacher_validation, resp[j].module.skills[k].progression.teacher_validation_date)));
          }
          this.student.formations[i].addModule(currentModule);
        }
      }).catch(e => console.log('Error setting modules: ', e));
    }
  }

  public showFormation(formation: Formation): void {
    this.formationSelected = formation;
  }

  public ShowModule(module: ModuleFormation): void {
    this.moduleSelected = module;
  }

  public updateValidation(progressionId: any, validation: any): void {
    this.apiService.put('progression/updateStudentValidation', { progression_id: progressionId, student_validation: validation })
    .then(resp => console.log('update validation: ', resp))
    .catch(e => console.log('Error updating validation: ', e));
  }
}
