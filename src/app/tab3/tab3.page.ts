import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  amount=1;
  from="euro";
  to="usd";
  warning="";
  rates;
  
  constructor(public navCtrl: NavController) 
  {
    this.loadRates();
  }

  convert()
  {
    console.log("amount =" + this.amount);
    console.log("from = " + this.from);
    console.log("to = " + this.to);

    this.warning=this.from + " " + this.to;
    if (this.from == this.to)
    {
      this.warning="Cannot have same from and to currency";
      return;
    }
    //this.loadRates();
    var rate = this.rates[this.from][this.to];
    console.log("using rate "+ rate);
    var convertedAmount = rate * this.amount;
    console.log("converted amount = " + convertedAmount);
    
    
    this.navCtrl.navigateForward('/tabs/tab2?amount=' + convertedAmount);
  
  }
  loadRates(): any {
    fetch('assets/rates.json').then(async res => {
      this.rates = await res.json();
    });
    //this.http.get('assets/rates.json').map(res => res.json()).subscribe(res => {
      //this.rates = res.menuItems;
      //console.log(this.rates);
      //return;
    //},
    //(err) => {
    //  alert('failed loading json data');
    //});
  }
}

