import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

// Models
import { Comment } from './../../models/comment';
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

  constructor(private platform: Platform, private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.platform.ready().then(() => this.setReport(this.route.snapshot.paramMap.get('report'), this.route.snapshot.paramMap.get('formation')));
  }

  private setReport(reportId: any, formationId: any): void {
    this.apiService.get('reportofStudent/' + reportId + '/of/' + formationId).then((resp: any) => {
      // tslint:disable-next-line:max-line-length
      this.report = new Report(resp[0].report_id, resp[0].title, resp[0].report_date, new Student(null, resp[0].student[0].lastname, resp[0].student[0].firstname, null, null, null, null, null, null, resp[0].student_id, resp[0].formation_id), resp[0].text, resp[0].rate, resp[0].report_is_daily, resp[0].created_at, resp[0].updated_at);
      for (let i = 0; i < resp[0].comments.length; i++) {
        this.report.addComment(new Comment());
      }
    }).catch(e => console.log('Error setting report: ', e));
  }

  public addReport(): void {
    this.router.navigate(['/student/report-form']);
  }
}
