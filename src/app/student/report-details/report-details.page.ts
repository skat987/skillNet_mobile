import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public newCommentForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private platform: Platform, private router: Router, private route: ActivatedRoute, private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.platform.ready().then(() => {
      this.setReport(this.route.snapshot.paramMap.get('report'), this.route.snapshot.paramMap.get('formation'));
      this.newCommentForm = this.formBuilder.group({ commentText: ['', Validators.required] });
    });
  }

  private setReport(reportId: any, formationId: any): void {
    this.apiService.get('reportofStudent/' + reportId + '/of/' + formationId).then((resp: any) => {
      // tslint:disable-next-line:max-line-length
      this.report = new Report(resp[0].report_id, resp[0].title, resp[0].report_date, new Student(null, resp[0].student[0].lastname, resp[0].student[0].firstname, null, null, null, null, null, null, resp[0].student_id, resp[0].formation_id), resp[0].text, resp[0].rate, resp[0].report_is_daily, resp[0].created_at, resp[0].updated_at);
      for (let i = 0; i < resp[0].comments.length; i++) {
        // tslint:disable-next-line:max-line-length
        this.report.addComment(new Comment(resp[0].comments[i].id, resp[0].comments[i].text, new Student(resp[0].comments[i].user_id, resp[0].comments[i].lastname, resp[0].comments[i].firstname), resp[0].comments[i].created_at));
      }
    }).catch(e => console.log('Error setting report: ', e));
  }

  public addReport(): void {
    this.router.navigate(['/student/report-form']);
  }

  get f() { return this.newCommentForm.controls; }

  public createComment(reportId: any): void {
    if (this.newCommentForm.invalid) { return; }
    this.apiService.post('reportComment/create', { report_id: reportId, text: this.f.commentText.value })
    .then(resp => console.log('create comment: ', resp))
    .then(() => this.setReport(this.route.snapshot.paramMap.get('report'), this.route.snapshot.paramMap.get('formation')))
    .catch(e => console.log('Error creating comment: ', e));
  }
}
