import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';
import { Slides } from '@ionic/angular';

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

// Env
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild(Slides) slides: Slides;
  public student: Student;
  public formationSelected: Formation;
  public moduleSelected: ModuleFormation;
  public environment = environment;

  // tslint:disable-next-line:max-line-length
  constructor(private platform: Platform, private authService: AuthService, private apiService: ApiService, public menuCtrl: MenuController) { }

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
    }).then(() => this.showFormation())
    .catch(e => console.log('Error setting formations: ', e));
  }

  public showFormation(): void {
    this.setFormationSelected().then((resp: Formation) => this.setModules(resp.id))
    .catch(e => console.log('Error showing formation: ', e));
  }

  private setFormationSelected(): Promise<Formation> {
    return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      resolve(this.formationSelected = (!this.formationSelected) ? this.student.getFormationById(this.student.currentFormationId) : this.formationSelected);
    });
  }

  private setModules(formationId: any): void {
    this.apiService.get('getFormationForAdmin/' + formationId).then((resp: any) => {
      let currentModule: ModuleFormation;
      for (let i = 0; i < resp.length; i++) {
        // tslint:disable-next-line:max-line-length
        currentModule = new ModuleFormation(resp[i].module.id, resp[i].module.name, new ProgressionTotal(resp[i].module.totalSkills, resp[i].module.progression.student, resp[i].module.progression.teacher));
        for (let j = 0; j < resp[i].module.skills.length; j++) {
          // tslint:disable-next-line:max-line-length
          currentModule.addSkill(new Skill(resp[i].module.skills[j].id, resp[i].module.skills[j].name, new ProgressionDetails(resp[i].module.skills[j].progression.student_progression_id, resp[i].module.skills[j].progression.student_validation, resp[i].module.skills[j].progression.student_validation_date, resp[i].module.skills[j].progression.teacher_validation, resp[i].module.skills[j].progression.teacher_validation_date)));
        }
        this.formationSelected.addModule(currentModule);
      }
    }).catch(e => console.log('Error setting modules: ', e));
  }

  public showModule(module: ModuleFormation): void {
    this.moduleSelected = module;
  }

  public updateValidation(progressionId: any, validation: any): void {
    this.apiService.put('progression/updateStudentValidation', { progression_id: progressionId, student_validation: validation })
    .then(resp => console.log('update validation: ', resp))
    .catch(e => console.log('Error updating validation: ', e));
  }

  public goToSlide() {
    this.slides.slideTo(1);
  }

  slideChanged() {
    const currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    const reroll = this.slides.isEnd();
    if (reroll) {
      this.slides.slidePrev(5, true);
    }
  }

  public slideNext() {
    this.slides.slideNext();
  }

  public slidePrev() {
    this.slides.slidePrev();
  }
}
