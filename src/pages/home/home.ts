import { User } from './../../models/user.model';
import { FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

//import { NgForm } from '@angular/forms';

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

  //Madeira
  public area_madeira: number;
  public preco_madeira: number;
  public inclinacao_madeira: number;
  public qtd_madeira: number = 0;
  public gasto_madeira: string = '0';

    //Cimento
    public area_cimento: number;
    public preco_cimento: number;
    public qtd_cimento: number = 0;
    public gasto_cimento: string = '0';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
  ) {

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Tente novamente',
      subTitle: 'Inclinação fora de norma!',
      buttons: ['OK']
    });
    alert.present();
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
   if( this.inclinacao >= 30 && this.inclinacao <= 35) {
      let quantidade_telha = this.area_telha * 1.052;
      this.qtd_telha = Math.round(quantidade_telha * 25.92);
   } else if ( this.inclinacao > 35 && this.inclinacao <= 40 ) {
      let quantidade_telha = this.area_telha * 1.070;
      this.qtd_telha = Math.round(quantidade_telha * 25.92);  
   } else {
     this.qtd_telha = 0;
     this.presentAlert();
     console.log("Inclinação fora de norma!", this.inclinacao, "%");
   }

  let gasto_telha:number = (this.preco_telha / 1000 * this.qtd_telha);
    this.gasto_telha = gasto_telha.toFixed(2);
  } 

 /* public Double getAreaInclinada(){
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
  calcular_madeira() {
    console.log("Calculando quantidade de madeira...", this.area_madeira);
    console.log("Calculando quantidade de madeira...", this.inclinacao_madeira);
    console.log("Calculando quantidade de madeira...", this.preco_madeira);
  } 

  calcular_cimento() {
    console.log("Calculando quantidade de cimento...", this.area_cimento);
    console.log("Calculando quantidade de cimento...", this.preco_cimento);
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