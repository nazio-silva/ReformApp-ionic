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

  public qtd = 0;
  public gasto = 0.00;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
   
  }

  calcular() {
    var quantidade_tijolo: number = Math.round((this.area * 1 ) * 27.5);
    this.qtd = quantidade_tijolo;
    console.log("Quantidade:" , quantidade_tijolo);

    var gasto_tijolo: number = (this.preco/1000 * this.area * 1 ) * 27.5;
    this.gasto = gasto_tijolo.toFixed(2);
    console.log("Valor Gasto:" , this.gasto);
  }
}


/*

  var teste = ${nomeVariavelVindoAction}
ai sua variavel javascript ja virá com o valor que vc mandou da action.



  public Double getQuantidade(){
    return (this.area * 27.5);
  }
  public Double getPrecoDoTijolo(){
    return this.preco / 1000;		
  }
  public Double getValorGastoTijolo(){
    return (getPrecoDoTijolo()*getQuantidade());
  }
*/
