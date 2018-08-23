export class ProgressionDetails {
    id: any;
    studentValue: any;
    studentValidationDate: any;
    teacherValue: any;
    teacherValidationDate: any;

    constructor (id?: any, studentValue?: any, studentValidationDate?: any, teacherValue?: any, teacherValidationDate?: any) {
        this.id = id;
        this.studentValue = studentValue;
        this.studentValidationDate = studentValidationDate;
        this.teacherValue = teacherValue;
        this.teacherValidationDate = teacherValidationDate;
    }
}
