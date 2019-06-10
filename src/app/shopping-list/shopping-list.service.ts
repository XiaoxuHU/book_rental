import { Subject, BehaviorSubject } from 'rxjs';
import { BookRental } from './BookRental.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
}) 

export class ShoppingListService {
    bookRentalChange = new Subject<BookRental[]>();
    private bookRentals:BookRental[] = [];
    totalCostChange = new Subject<number>();
    getBookRentals():BookRental[] {
        return [...this.bookRentals];
    }

    getBookRental(index:number){
        return this.bookRentals[index];  
    }

    //change or add one
    addOrUpdateBookRental(newBookRental:BookRental):void {
        //find index of book which is in bookRentals array
        const index = this.bookRentals.findIndex((bookRenatl) => bookRenatl.book.id === newBookRental.book.id)
        if (index === -1) {
            this.bookRentals.push(newBookRental);
        } else {
            this.bookRentals[index] = newBookRental;
        }
        this.bookRentalChange.next([...this.bookRentals]);
        this.updateTotalPrice();
    }

    deleteBookRental(index:number):void {
        this.bookRentals.splice(index,1);
        this.bookRentalChange.next([...this.bookRentals]);
        this.updateTotalPrice();
    }

    getTotalPrice():number{
        let total:number = 0;
        const cur:number = new Date().getTime();
        for (let bookRental of this.bookRentals) {
            const rentalDays:number 
                = Math.floor((bookRental.expire.getTime() - cur)/86400000) + 1;
            total = total + rentalDays * (+bookRental.book.price);
        }
        return +total.toFixed(2);
    }

    updateTotalPrice():void {
        let totalCost = 0;
        const cur:number = new Date().getTime();
        for (let bookRental of this.bookRentals) {
            const rentalDays:number 
                = Math.floor((bookRental.expire.getTime() - cur)/86400000) + 1;
           totalCost = totalCost + rentalDays * (+bookRental.book.price);
        }
        totalCost = +totalCost.toFixed(2);
        this.totalCostChange.next(totalCost);
    }
}