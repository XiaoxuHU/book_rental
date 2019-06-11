import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookService } from '../../books/book.service';

@Injectable({
    providedIn: 'root',
}) 

export class RateService{
    private rates:number[];
    public rateChange = new Subject<number[]>();
    constructor(private bookServise:BookService){
        this.bookServise.bookChange.
        subscribe(data => {
            this.rates = [...data.rates];
            this.rateChange.next(this.rates);
        });
    }
    updateRate(rate:number):void{
        this.rates[rate - 1] = +this.rates[rate - 1] + 1;
        this.rateChange.next(this.rates);
    }
}