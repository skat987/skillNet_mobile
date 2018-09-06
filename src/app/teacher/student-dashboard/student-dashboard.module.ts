import { ModalPagePageModule } from '../modal-page/modal-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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
        ModalPagePageModule,
        RouterModule.forChild(routes)
    ],
    declarations: [StudentDashboardPage]
})
export class StudentDashboardPageModule { }
