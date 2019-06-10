import { Component, OnInit, Input } from '@angular/core';
import { BookRental } from 'src/app/shopping-list/BookRental.model';
import { Book } from 'src/app/books/book.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() book:Book;
  @Input() content:string;
  isVisable:boolean = false;
  endDate:Date = null;
  constructor(private shoppingService:ShoppingListService) { }
  
  ngOnInit() {
  }

  handleShowModal():void {
    this.isVisable = true;
  }
  handleCloseModal():void {
    this.isVisable = false;
  }
  
  //disable all date which are early than today
  disabledSelectDate(endDate:Date):boolean{
    const curTime = new Date().getTime();
    return endDate.getTime() < curTime;
  }

  handleOkModal():void {
    const newBookRental = new BookRental(this.book,this.endDate);
    this.shoppingService.addOrUpdateBookRental(newBookRental);
    this.isVisable = false;
  }
}
