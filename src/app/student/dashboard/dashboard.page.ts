import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

// Models
import { Skill } from '../../models/skill';
import { Student } from '../../models/student';
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
  public modules: ModuleFormation[] = [];
  public moduleSelected: ModuleFormation = new ModuleFormation();

  constructor(private platform: Platform, private authService: AuthService, private apiService: ApiService) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setStudent());
  }

  private setStudent(): void {
    this.authService.getAuth().then((user: any) => {
      this.student = new Student(user.student_id, user.lastname, user.firstname, user.avatar, user.email, user.gender);
    }).then(() => this.setModules())
    .catch(e => console.log('Error setting student: ', e));
  }

  private setModules(): void {
    this.apiService.get( 'getFormations').then((resp: any) => {
      this.modules = [];
      let currentModule: ModuleFormation;
      for (let i = 0; i < resp.length; i++) {
        // tslint:disable-next-line:max-line-length
        currentModule = new ModuleFormation(resp[i].module.id, resp[i].module.name, new ProgressionTotal(resp[i].module.totalSkills, resp[i].module.progression.student, resp[i].module.progression.teacher));
        for (let j = 0; j < resp[i].module.skills.length; j++) {
          // tslint:disable-next-line:max-line-length
          currentModule.addSkill(new Skill(resp[i].module.skills[j].id, resp[i].module.skills[j].name, new ProgressionDetails(resp[i].module.skills[j].progression.student_progression_id, resp[i].module.skills[j].progression.student_validation, resp[i].module.skills[j].progression.student_validation_date, resp[i].module.skills[j].progression.teacher_validation, resp[i].module.skills[j].progression.teacher_validation_date)));
        }
        this.modules.push(currentModule);
      }
    }).catch(e => console.log('Error setting modules: ', e));
  }

  public ShowModule(moduleId: any): void {
    this.moduleSelected = this.modules[this.modules.findIndex((module) => module.id === moduleId)];
  }

  public updateValidation(progressionId: any, validation: any): void {
    this.apiService.put('progression/updateStudentValidation', { progression_id: progressionId, student_validation: validation })
    .then(resp => console.log('update validation: ', resp))
    .catch(e => console.log('Error updating validation: ', e));
  }
}
