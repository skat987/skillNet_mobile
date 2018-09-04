// Models
import { Student } from './student';

export class Comment {
    id: any;
    text: any;
    author: Student;
    createdAt: any;

    constructor (id?: any, text?: any, author?: Student, createdAt?: any) {
        this.id = id;
        this.text = text;
        this.author = author;
        this.createdAt = createdAt;
    }
}
