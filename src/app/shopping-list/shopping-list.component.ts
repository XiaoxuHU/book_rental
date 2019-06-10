import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { BookRental } from './BookRental.model';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  bookRentals:BookRental[];
  totalPrice:number = 0;
  bookSub:Subscription;
  priceSub:Subscription;
  isVisible:boolean = false;
  @ViewChild('f') form:NgForm;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.bookRentals = this.shoppingService.getBookRentals();
    this.bookSub = this.shoppingService.bookRentalChange.
      subscribe(bookRentals => this.bookRentals = bookRentals);
    
    this.totalPrice = this.shoppingService.getTotalPrice();
    this.priceSub = this.shoppingService.totalCostChange.subscribe(data => {
      this.totalPrice = data;
    });
  }
  ngOnDestroy() {
    this.bookSub.unsubscribe();
    this.priceSub.unsubscribe();
  }

  //delete rental book with index 
  deleteBookRental(index:number):void {
    this.shoppingService.deleteBookRental(index);  
  }

  handleModalCancel(){
    this.isVisible = false;
  }
  handleModalOk() {
    this.isVisible = false;
    console.log(this.form.value);
    
  }
  showModal() {
    this.isVisible = true;
  }

}
