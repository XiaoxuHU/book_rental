import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  rate:number;
  book:Book;
  cardTitle: string = "";
  id:number = null;
  constructor(
    private bookService:BookService,
    private route: ActivatedRoute
  ) {}
  
  clickHandle() {
    this.bookService.updateRate(this.rate,this.book);
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.bookService.getBook(this.id);
    this.bookService.bookChange.subscribe(data => {
      this.book = data;
      this.cardTitle = `Written By ${data.author}`;
    });
  }
}
