import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RateService } from '../../shared/rates/rates.service';

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
  isRated:boolean = false;
  constructor(
    private bookService:BookService,
    private route: ActivatedRoute,
    private rateService:RateService,
  ) {}
  
  clickRateHandle() {
    this.isRated = true;
    this.rateService.updateRate(this.rate);
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
