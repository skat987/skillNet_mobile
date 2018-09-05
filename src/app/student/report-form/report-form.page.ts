import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// Services
import { ApiService } from './../../service/api/api.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
})
export class ReportFormPage implements OnInit {
  public newReportForm: FormGroup;

  constructor(private platform: Platform, private formBuilder: FormBuilder, private apiService: ApiService) {
    this.platform.ready().then(() => {
      this.newReportForm = this.formBuilder.group({
        title: ['', Validators.required],
        date: ['', Validators.required],
        rate: ['', Validators.required],
        text: ['', Validators.required]
      });
    });
  }

  ngOnInit() { }

  get f() { return this.newReportForm.controls; }

  public onSubmit(): void {
    if (this.newReportForm.invalid) { return; }
    const dataReport = {
      title: this.f.title.value,
      date: new Date(this.f.date.value.year.value, this.f.date.value.month.value, this.f.date.value.day.value).toDateString(),
      text: this.f.text.value,
      rate: this.f.rate.value
    };
    console.log('create controle: ', dataReport);
    this.apiService.post('report/create', dataReport)
    .then(resp => console.log('create report: ', resp))
    .catch(e => console.log('Error creating report: ', e));
  }
}
