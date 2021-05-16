import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  rates;
  
  constructor(public navCtrl: NavController, private router:Router) 
  {
    this.loadRates();
  }
  loadRates(): any {
    fetch('assets/rates.json').then(async res => {
      var rates = await res.json();
      this.convertToList(rates);
    });
  }
  convertToList(rates: any): any {
    this.rates = [];
    for (const [from, table] of Object.entries(rates)){
      console.log(from);
      console.log(table);
      for (const [to, rate] of Object.entries(table))
      {
        this.rates.push({
          from: from, 
          to: to,
          rate: rate
        })
      }
    }
    console.log(this.rates);
  }
}



