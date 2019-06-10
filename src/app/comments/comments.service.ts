import { Subject } from 'rxjs';
import { Book } from '../books/book.model';
import { Comment } from './comment.model';

export class CommentService {

    private comments:Comment[];
    public commentChange:Subject<Comment[]> = new Subject();

    getAllComments(book:Book):void {
        this.comments = [...book.comments];
        this.commentChange.next(this.comments);
    }

    addComments(content:string):void{
        let newCommnet = new Comment(content,new Date());
        this.comments.push(newCommnet);
        this.commentChange.next(this.comments);
    }
}