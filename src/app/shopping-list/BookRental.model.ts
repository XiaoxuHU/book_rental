import { Book } from "../books/book.model";
export class BookRental{
    book:Book;
    expire:Date;
    constructor(book:Book,expire:Date) {
        this.book = book;
        this.expire = expire;
    }
}