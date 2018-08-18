import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  // route login
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

  // route student
  { path: 'student/dashboard', loadChildren: './student/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'student/reports', loadChildren: './student/reports/reports.module#ReportsPageModule' },
  { path: 'student/report-details', loadChildren: './student/report-details/report-details.module#ReportDetailsPageModule' },
  { path: 'student/plannings', loadChildren: './student/plannings/plannings.module#PlanningsPageModule' },

  // route teacher
  { path: 'teacher/formations', loadChildren: './teacher/formations/formations.module#FormationsPageModule' },
  { path: 'teacher/student-dashboard', loadChildren: './teacher/student-dashboard/student-dashboard.module#StudentDashboardPageModule' },
  { path: 'teacher/reports', loadChildren: './teacher/reports/reports.module#ReportsPageModule' },
  { path: 'teacher/report-details', loadChildren: './teacher/report-details/report-details.module#ReportDetailsPageModule' },
  { path: 'teacher/plannings', loadChildren: './teacher/plannings/plannings.module#PlanningsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
