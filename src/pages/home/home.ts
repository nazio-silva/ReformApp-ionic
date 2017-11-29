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

  //Tijolo
  public area: number;
  public preco: number;
  public qtd: number = 0;
  public gasto: string = '0';


  //Telha
  public area_telha: number;
  public preco_telha: number;
  public inclinacao: number;
  public qtd_telha: number = 0;
  public gasto_telha: string = '0';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {

  }

  calcular_tijolo() {
    var quantidade_tijolo: number = Math.round((this.area * 1) * 27.5);
    this.qtd = quantidade_tijolo;
    console.log("Quantidade:", quantidade_tijolo);

    var gasto_tijolo: number = (this.preco / 1000 * this.area * 1) * 27.5;
    this.gasto = gasto_tijolo.toFixed(2);
    console.log("Valor Gasto:", this.gasto);
  }

  calcular_telha() {
    console.log("Calculando quantidade de telhas...", this.area_telha);
    console.log("Calculando quantidade de telhas...", this.inclinacao);
    console.log("Calculando quantidade de telhas...", this.preco_telha);
  } 
}

/*

public Double getAreaInclinada(){
		if(inclinacao >= 30 && inclinacao <= 35){
			return this.areaCoberta* 1.052;
		}else if(inclinacao > 35 && inclinacao <= 40){
			return this.areaCoberta* 1.070;
		}else{
			System.out.println("Inclinação fora da norma!");
			}
		return this.areaCoberta;
		}
	
	public Double getQuantidade(){
		return getAreaInclinada() * 25.92;
	}
	public Double getValorGastoTelha(){
		return getPrecoDaTelha()*getQuantidade();
	}

*/