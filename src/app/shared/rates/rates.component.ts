import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  @Input() rates:number[];
  sumRate:number = 0;
  ratesPercent:number[] = [];
  constructor() {}

  ngOnInit() {
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

}
