import { User } from './../../models/user.model';
import { FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public area;
  public preco;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.area = this.navParams.data;
  }

  calcular(a,p) {
   console.log(this.area);
  }
}
