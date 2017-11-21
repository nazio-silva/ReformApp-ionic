import { User } from './../../models/user.model';
import { FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cal;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.cal = this.navParams.data;
  }

  calcular(b) {
    console.log(this.cal);
  }
}
