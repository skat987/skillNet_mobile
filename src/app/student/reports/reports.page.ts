import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

// Models
import { Report } from '../../models/report';
import { Student } from '../../models/student';
import { Formation } from '../../models/formation';

// Services
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  public formation: Formation;

  constructor(private platform: Platform, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setFormation());
  }

  private setFormation(): void {
    this.apiService.get('report/getStudentsReportByFormation').then((resp: any) => {
      this.formation = new Formation(resp['data'][0].formation_id, resp['data'][0].name);
      for (let i = 0; i < resp['data'].length; i++) {
        // tslint:disable-next-line:max-line-length
        this.formation.addReport(new Report(resp['data'][i].report_id, resp['data'][i].report_title, resp['data'][i].report_date, new Student(null, resp['data'][i].studentLastname, resp['data'][i].studentFirstname), resp['data'][i].text, resp['data'][i].report_rate, resp['data'][i].is_daily, resp['data'][i].created_date, resp['data'][i].last_edit_date));
      }
    }).catch(e => console.log('Error setting formation: ', e));
  }

  public showReport(reportId: any, formationId: any): void {
    this.router.navigate(['/student/report-details', { formation: formationId, report: reportId }]);
  }
}
