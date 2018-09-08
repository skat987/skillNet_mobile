import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormationsPage } from './formations.page';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

const routes: Routes = [
  {
    path: '',
    component: FormationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundProgressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormationsPage]
})
export class FormationsPageModule { }
