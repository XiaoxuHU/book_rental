import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/books/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book:Book;
  constructor(private route:Router) { }

  clickHandler(id:number) {
    this.route.navigate(["/books",id]);
  }

  ngOnInit() {
  }

}
