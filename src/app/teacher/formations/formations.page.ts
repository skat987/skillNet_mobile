import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Slides } from '@ionic/angular';

// Models
import { Student } from '../../models/student';
import { Teacher } from '../../models/teacher';
import { Formation } from '../../models/formation';
import { ModuleFormation } from '../../models/module-formation';
import { ProgressionTotal } from '../../models/progression-total';

// Services
import { AuthService } from '../../service/auth/auth.service';
import { ApiService } from '../../service/api/api.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})

export class FormationsPage implements OnInit {

  @ViewChild(Slides) slides: Slides;
  public teacher: Teacher;
  environment = environment;
  public student: Student = new Student();
  public modules: ModuleFormation[] = [];
  public moduleSkills: any;
  public moduleSelected = 0;
  public allSkills = [];
  public skills = [];
  public lastname: any;
  public firstname: any;
  public avatar: any;
  public selectedSkills: number[] = [0];
  public totalSkills = 0;
  public totalStudentValidation = 0;
  public totalTeacherValidation = 0;
  public me: any;
  public dataFormation: any;
  public formation: any;
  public formationId: any;
  shownGroup: any;
  public formationSelected: Formation;

  constructor(private apiService: ApiService, private platform: Platform, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setTeacher());
  }

  private setTeacher(): void {
    this.authService.getAuth().then((user: any) => {
      // tslint:disable-next-line:max-line-length
      this.teacher = new Teacher(null, user.lastname, user.firstname, user.avatar, user.email, user.gender, user.birthday_date, user.phone_number, user.token);
    }).then(() => this.setFormations())
      .catch(e => console.log('Error setting Teacher: ', e));
  }

  private setFormations(): void {
    this.apiService.get('teacher/myFormations').then((resp: any) => {
      for (let i = 0; i < resp['data'].length; i++) {
        // tslint:disable-next-line:max-line-length
        this.teacher.addFormation(new Formation(resp['data'][i].id, resp['data'][i].name, resp['data'][i].logo, resp['data'][i].start_at, resp['data'][i].end_at, null, null, resp['data'][i].total_students));
        for (let j = 0; j < resp['data'][i].modules.length; j++) {
          this.teacher.formations[i].addModule(new ModuleFormation(resp['data'][i].modules[j].id, resp['data'][i].modules[j].name));
        }
      }
    }).catch(e => console.log('Error setting formations list: ', e));
  }

  private setStudents(formationId: any): void {
    this.apiService.get('getStudentsOfFormation/' + formationId).then((resp: any) => {
      for (let i = 0; i < resp.length; i++) {
        // tslint:disable-next-line:max-line-length
        this.formationSelected.addStudent(new Student(resp[i].id, resp[i].lastname, resp[i].firstname, resp[i].avatar, resp[i].email, resp[i].gender, resp[i].birthday_date, resp[i].phone_number, null, resp[i].student_id, this.teacher.getFormationById(formationId), new ProgressionTotal(resp[i].progression.totalSkills, resp[i].progression.studentValidations, resp[i].progression.teacherValidations)));
      }
    }).catch(e => console.log('Error setting students: ', e));
  }

  public showStudentDashBoard(studentId: any, formationId: any): void {
    this.router.navigate(['/teacher/student-dashboard', { student: studentId, formation: formationId }]);
  }

  public filterByModule(moduleId) {
    this.moduleSkills = this.modules[
      this.modules.findIndex((module, index, tab) => {
        for (let i; i < this.modules.length; i++) {
          return module['id'] === moduleId;
        }
        console.log('allSkills: ', this.modules);
      })
    ];

  }
  public showSkills(moduleId: any): void {
    this.formationSelected.getModuleById(moduleId);
    this.moduleSkills = this.modules[
      this.modules.findIndex((module, index, tab) => {
        return module['id'] === moduleId;
      }
      )
    ];
  }

  goToSlide() {
    this.slides.slideTo(1);
  }

  slideChanged() {
    const currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    const reroll = this.slides.isEnd();
    if (reroll) {
      this.slides.scrollbar = true;
    }
  }

  slideNext() {
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.slidePrev();
  }

  toggleGroup(group: Formation) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
    this.setFormationSelected(group).then((resp: Formation) => this.setStudents(resp.id))
    .catch(e => console.log('Error setting formation selected: ', e));
  }

  isGroupShown(group: Formation) {
    return this.shownGroup === group;
  }

  private setFormationSelected(formation: Formation): Promise<Formation> {
    return new Promise(resolve => resolve(this.formationSelected = formation));
  }

}
