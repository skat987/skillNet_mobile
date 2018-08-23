import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

// Models
import { Report } from '../../models/report';
import { Student } from '../../models/student';

// Services
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.page.html',
  styleUrls: ['./report-details.page.scss'],
})
export class ReportDetailsPage implements OnInit {
  public report: Report;

  constructor(private platform: Platform, private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.platform.ready().then(() => this.setReport(this.route.snapshot.paramMap.get('report'), this.route.snapshot.paramMap.get('formation')));
  }

  private setReport(reportId: any, formationId: any): void {
    this.apiService.get('getReport/' + reportId + '/ofFormation/' + formationId).then((resp: any) => {
      // tslint:disable-next-line:max-line-length
      this.report = new Report(resp[0].report_id, resp[0].report_date, new Student(resp[0].student_id, resp[0].author[0].lastname, resp[0].author[0].firstname), resp[0].text, resp[0].created_at);
    }).catch(e => console.log('Error setting report: ', e));
  }
}
