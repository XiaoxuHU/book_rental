import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];
  constructor(
    private bookService:BookService,
    private route:Router
  ) { }
  clickHandler(id:number) {
    this.route.navigate(["/books",id]);
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }
}
