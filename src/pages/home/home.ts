import { User } from './../../models/user.model';
import { FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public area : number;
  public preco : number;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    
  }

  calcular() {
    var qtd: number = Math.round((this.area * 1 ) * 27.5);
    console.log(qtd);

    var gasto: number = Math.round((this.preco/1000 * this.area * 1 ) * 27.5);
    console.log(gasto);

  }
}


/*public Double getQuantidade(){
  return (this.area * 27.5);
}
public Double getPrecoDoTijolo(){
  return this.preco / 1000;		
}
public Double getValorGastoTijolo(){
  return (getPrecoDoTijolo()*getQuantidade());
}*/
