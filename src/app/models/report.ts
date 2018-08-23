// Models
import { Student } from './student';

export class Report {
    id: any;
    date: any;
    author: Student;
    text: any;
    rate: any;
    isDaily: any;
    updatedAt: any;
    createdAt: any;

    constructor (id?: any, date?: any, author?: Student, text?: any, rate?: any, isDaily?: any, createdAt?: any, updatedAt?: any) {
        this.id = id;
        this.date = date;
        this.author = author;
        this.text = text;
        this.rate = rate;
        this.isDaily = isDaily;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
