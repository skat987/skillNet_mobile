// Models
import { Student } from './student';
import { Comment } from './comment';

export class Report {
    id: any;
    title: any;
    date: any;
    author: Student;
    text: any;
    rate: any;
    isDaily: any;
    updatedAt: any;
    createdAt: any;
    comments: Comment[] = [];

    // tslint:disable-next-line:max-line-length
    constructor (id?: any, title?: any, date?: any, author?: Student, text?: any, rate?: any, isDaily?: any, createdAt?: any, updatedAt?: any) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.author = author;
        this.text = text;
        this.rate = rate;
        this.isDaily = isDaily;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}
