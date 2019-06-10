import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Book } from 'src/app/books/book.model';
import { BookService } from 'src/app/books/book.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  notFound:boolean = true;
  books:Book[] = [];
  constructor(private bookService:BookService) { }
  ngOnInit() {
    this.bookService.queryBooksChange.
      subscribe(data => {
        this.books = data;
        this.notFound = data.length === 0;
    });
  }

}
