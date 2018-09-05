import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';
import { Slides } from '@ionic/angular';

// Models
import { Skill } from '../../models/skill';
import { Student } from '../../models/student';
import { ModuleFormation } from '../../models/module-formation';
import { ProgressionTotal } from '../../models/progression-total';
import { ProgressionDetails } from '../../models/progression-details';

// Services
import { AuthService } from '../../service/auth/auth.service';
import { ApiService } from '../../service/api/api.service';
import { environment } from './../../../environments/environment.prod';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild(Slides) slides: Slides;
  public student: Student;
  public modules: ModuleFormation[] = [];
  public moduleSelected: ModuleFormation;
  public formation: any;
  public environment = environment;

  constructor(private platform: Platform, private authService: AuthService, private apiService: ApiService, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setStudent());
  }

  private setStudent(): void {
    this.authService.getAuth().then((user: any) => {
      // tslint:disable-next-line:max-line-length
      this.student = new Student(null, user.lastname, user.firstname, user.avatar, user.email, user.gender, user.birthday_date, user.phone_number, user.token, user.student_id, user.formation_id);
    }).then(() => this.setModules())
    .catch(e => console.log('Error setting student: ', e));
  }

  private setModules(): void {
    this.apiService.get('studentsFormation').then((data: any) => {
      for (let i = 0; i < data.length; i++ ){
        this.formation = data[i];
      }
      console.log('formation: ', this.formation);
    });
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

  public ShowModule(module: ModuleFormation): void {
    this.moduleSelected = module;
  }

  public updateValidation(progressionId: any, validation: any): void {
    this.apiService.put('progression/updateStudentValidation', { progression_id: progressionId, student_validation: validation })
    .then(resp => console.log('update validation: ', resp))
    .catch(e => console.log('Error updating validation: ', e));
  }

  public filterByModule(moduleId) {
    this.moduleSelected = this.modules[
      this.modules.findIndex((module, index, tab) => { 
        for(let i; i < this.modules.length; i++) {
          return module['id'] == moduleId;
        } 
        console.log('allSkills: ', this.modules);
      })
    ];
  } 

  public goToSlide() {
    this.slides.slideTo(1);
  }

  public slideNext(){
    this.slides.slideNext();
  }

  public slidePrev(){
    this.slides.slidePrev();
  }

  public openMenu() {
    this.menuCtrl.open();
  }
}
