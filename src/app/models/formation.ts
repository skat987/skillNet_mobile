// Models
import { Student } from './student';
import { ModuleFormation } from './module-formation';
import { Report } from './report';

// Env
import { environment } from '../../environments/environment';
const _APP_LOGO_URL = environment.appLogoUrl;

export class Formation {
    id: any;
    name: any;
    logo: any;
    startAt: any;
    endAt: any;
    studentCount: any;
    students: Student[] = [];
    modules: ModuleFormation[] = [];
    reports: Report[] = [];

    constructor (id?: any, name?: any, logo?: any, startAt?: any, endAt?: any, studentCount?: any) {
        this.id = id;
        this.name = name;
        this.logo = _APP_LOGO_URL + logo;
        this.startAt = startAt;
        this.endAt = endAt;
        this.studentCount = studentCount;
    }

    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public getStudentById(studentId: any): Student {
        return this.students[this.students.findIndex((student) => student.id === studentId)];
    }

    public addModule(module: ModuleFormation): void {
        this.modules.push(module);
    }

    public getModuleById(moduleId: any): ModuleFormation {
        return this.modules[this.modules.findIndex((module) => module.id === moduleId)];
    }

    public addReport(report: Report): void {
        this.reports.push(report);
    }

    public getReportById(reportId: any): Report {
        return this.reports[this.reports.findIndex((report) => report.id === reportId)];
    }
}
