import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [NavParams]
})
export class Tab2Page implements OnInit {
  result;
  rate;
  to;
  from;

  constructor(private route: ActivatedRoute, private router: Router, public navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
        console.log(params);
        this.result = parseFloat(params.amount).toFixed(2);
        this.from = params.from;
        this.to = params.to;
        this.rate = params.rate;
    });
  }
  ngOnInit(): void {}

  back()
  {
    this.navCtrl.navigateForward('/tabs/tab3')
  }

  /*
  constructor(params: NavParams) 
  {
    console.log(params);
    this.result = params["amount"];

  }
*/
}
