import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RateService } from 'src/app/shared/rates/rates.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit,OnDestroy  {
  sumRate:number = 0;
  ratesPercent:number[] = [];
  rates:number[];
  rateSub:Subscription;
  constructor(private rateService:RateService) {}

  calcuRate() {
    this.ratesPercent = [];
    this.sumRate = 0;
    for (let rate of this.rates) {
      const rate_num = +rate;
      this.sumRate += rate_num;
    }
    for (let rate of this.rates) {
      const rate_num = (+rate) / this.sumRate * 100;
      const percent = +rate_num.toFixed(2);
      this.ratesPercent.push(percent);
    }
  }

  ngOnInit() {
    this.rateSub = this.rateService.rateChange.subscribe(
      data => {
        this.rates = data;
        this.calcuRate();
    })
  }

  ngOnDestroy() {
    this.rateSub.unsubscribe();
  }

}
