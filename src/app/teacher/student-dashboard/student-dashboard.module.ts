import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { IonicModule } from '@ionic/angular';

import { StudentDashboardPage } from './student-dashboard.page';

const routes: Routes = [
    {
        path: '',
        component: StudentDashboardPage
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
    declarations: [StudentDashboardPage]
})
export class StudentDashboardPageModule { }
