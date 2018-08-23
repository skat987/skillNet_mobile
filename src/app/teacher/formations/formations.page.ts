import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

// Models
import { Student } from '../../models/student';
import { Teacher } from '../../models/teacher';
import { Formation } from '../../models/formation';
import { ModuleFormation } from '../../models/module-formation';
import { ProgressionTotal } from '../../models/progression-total';

// Services
import { AuthService } from '../../service/auth/auth.service';
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {
  public teacher: Teacher;

  constructor(private apiService: ApiService, private platform: Platform, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setTeacher());
  }

  private setTeacher(): void {
    this.authService.getAuth().then((user: any) => {
      // tslint:disable-next-line:max-line-length
      this.teacher = new Teacher(null, user.lastname, user.firstname, user.avatar, user.email, user.gender, user.birthday_date, user.phone_number, user.token);
    }).then(() => this.setFormationsList())
    .catch(e => console.log('Error setting Teacher: ', e));
  }

  private setFormationsList(): void {
    this.apiService.get('teacher/myFormations').then((resp: any) => {
      for (let i = 0; i < resp['data'].length; i++) {
        // tslint:disable-next-line:max-line-length
        this.teacher.addFormation(new Formation(resp['data'][i].id, resp['data'][i].name, resp['data'][i].logo, resp['data'][i].start_at, resp['data'][i].end_at));
        for (let j = 0; j < resp['data'][i].modules.length; j++) {
          this.teacher.formations[i].addModule(new ModuleFormation(resp['data'][i].modules[j].id, resp['data'][i].modules[j].name));
        }
      }
    }).then(() => this.setStudentsLists())
    .catch(e => console.log('Error setting formations list: ', e));
  }

  private setStudentsLists(): void {
    for (let i = 0; i < this.teacher.formations.length; i++) {
      this.apiService.get('getStudentsOfFormation/' + this.teacher.formations[i].id).then((resp: any) => {
        for (let j = 0; j < resp.length; j++) {
          // tslint:disable-next-line:max-line-length
          this.teacher.formations[i].addStudent(new Student(resp[j].id, resp[j].lastname, resp[j].firstname, resp[j].avatar, resp[j].email, resp[j].gender, null, null, null, null, null, new ProgressionTotal(resp[j].progression.totalSkills, resp[j].progression.studentValidations, resp[j].progression.teacherValidations)));
        }
      }).catch(e => console.log('Error setting students Lists : ', e));
    }
  }

  public showStudentDashBoard(studentId: any, formationId: any): void {
    this.router.navigate(['/teacher/student-dashboard', { student: studentId, formation: formationId }]);
  }
}
