import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
import { Book } from '../books/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query:string = "";
  constructor(
    private bookService:BookService,
    private route: Router
  ) { }

  clickHandler() {  
    this.bookService.searchBooks(this.query);
    this.query = "";
    this.route.navigate(["/search"]);
  }
  ngOnInit() {
  }

}
