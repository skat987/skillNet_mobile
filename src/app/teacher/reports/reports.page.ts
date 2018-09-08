import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

// Models
import { Formation } from '../../models/formation';
import { Student } from '../../models/student';
import { Report } from '../../models/report';

// Services
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  public formations: Formation[] = [];

  constructor(private platform: Platform, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setFormations());
  }

  private setFormations(): void {
    this.apiService.get('teacher/myFormations').then((resp: any) => {
      this.formations = [];
      for (let i = 0; i < resp['data'].length; i++) {
        // tslint:disable-next-line:max-line-length
        this.formations.push(new Formation(resp['data'][i].id, resp['data'][i].name, resp['data'][i].logo, resp['data'][i].start_at, resp['data'][i].end_at, null, null, resp['data'][i].total_students));
      }
    }).then(() => this.setReportsByFormation())
    .catch(e => console.log('Error setting formations: ', e));
  }

  private setReportsByFormation(): void {
    for (let i = 0; i < this.formations.length; i++) {
      this.apiService.get('reportsByFormation/' + this.formations[i].id).then((resp: any) => {
        for (let j = 0; j < resp.length; j++) {
          // tslint:disable-next-line:max-line-length
          this.formations[i].addReport(new Report(resp[j].report_id, resp[j].report_title, resp[j].report_date, new Student(null, resp[j].student[0].lastname, resp[j].student[0].firstname, null, null, null, null, null, null, resp[j].student_id, resp[j].formation_id),  null, resp[j].report_rate, resp[j].report_is_daily, resp[j].created_at, resp[j].updated_at));
        }
      }).catch(e => console.log('Error setting reports: ', e));
    }
  }

  public showReport(reportId: any, formationId: any): void {
    this.router.navigate(['/teacher/report-details', { formation: formationId, report: reportId }]);
  }
}
