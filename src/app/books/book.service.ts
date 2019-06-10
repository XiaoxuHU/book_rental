import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
}) 

export class BookService{
    constructor(private http:HttpClient){}
    private base_url = "api/books";
    public queryBooksChange:Subject<Book[]> = new Subject();
    public bookChange:Subject<Book> = new Subject();
    
    //get all books 
    getBooks():Observable<Book[]>{
       return this.http.get<Book[]>(this.base_url)
    }
    //get one book by id
    getBook(id:number):void{
        const url = this.base_url + `/${id}`
        this.http.get<Book>(url)
                    .toPromise().then(data => this.bookChange.next(data));
    }
    
    //query books starts with query string
    searchBooks(query:string):void{
        const query_url = this.base_url + `/?name=^${query}`;
        this.http.get<Book[]>(query_url)
            .toPromise().then(data => this.queryBooksChange.next(...[data]));
    }

    updateRate(rate:number,book:Book):void{
        let rates = [...book.rates];
        rates[rate - 1] = +rates[rate - 1] + 1;
        book.rates = rates;
        this.bookChange.next(book);
    }
}