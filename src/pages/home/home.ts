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

  //Tijolo
  public area: number;
  public preco: number;
  public qtd: number = 0;
  public gasto: string = '0';

  calcular_tijolo() {
    var quantidade_tijolo: number = Math.round((this.area * 1) * 27.5);
    this.qtd = quantidade_tijolo;
    console.log("Quantidade:", quantidade_tijolo);

    var gasto_tijolo: number = (this.preco / 1000 * this.area * 1) * 27.5;
    this.gasto = gasto_tijolo.toFixed(2);
    console.log("Valor Gasto:", this.gasto);
  }

  //Telha ceramica
  public area_telha: number;
  public preco_telha: number;
  public inclinacao: number;
  public qtd_telha: number = 0;
  public gasto_telha: string = '0';

  calcular_telha() {
    /* 
    if( this.inclinacao >= 30 && this.inclinacao <= 35) {
       let quantidade_telha = this.area_telha * 1.051;
       this.qtd_telha = Math.round(quantidade_telha * 17);
    } else if ( this.inclinacao > 35 && this.inclinacao <= 40 ) {
       let quantidade_telha = this.area_telha * 1.070;
       this.qtd_telha = Math.round(quantidade_telha * 25.92);  
    } else {
      this.qtd_telha = 0;
      this.presentAlert();
      console.log("Inclinação fora de norma!", this.inclinacao, "%");
    }*/

    switch (this.inclinacao) {
      case '30':
        let quantidade_telha = this.area_telha * 1.044;
        this.qtd_telha = Math.round(quantidade_telha * 17);
        break;
      case '31':
        let quantidade_telha = this.area_telha * 1.047;
        this.qtd_telha = Math.round(quantidade_telha * 17);
        break;
      case '32':
        let quantidade_telha = this.area_telha * 1.050;
        this.qtd_telha = Math.round(quantidade_telha * 17);
        break;
      case '33':
        let quantidade_telha = this.area_telha * 1.053;
        this.qtd_telha = Math.round(quantidade_telha * 17);
        break;
      case '34':
        let quantidade_telha = this.area_telha * 1.056;
        this.qtd_telha = Math.round(quantidade_telha * 17);
        break;
      case '35':
        let quantidade_telha = this.area_telha * 1.059;
        this.qtd_telha = Math.round(quantidade_telha * 17);
        break;
      default:
        this.qtd_telha = 0;
        this.presentAlert();
    }

    let gasto_telha: number = (this.preco_telha / 1000 * this.qtd_telha);
    this.gasto_telha = gasto_telha.toFixed(2);
  }

  //Madeira
  public area_madeira: number;
  public preco_madeira: number;
  public inclinacao_madeira: number;
  public qtd_madeira: number = 0;
  public gasto_madeira: string = '0';

  calcular_madeira() {
    console.log("Calculando quantidade de madeira...", this.area_madeira);
    console.log("Calculando quantidade de madeira...", this.inclinacao_madeira);
    console.log("Calculando quantidade de madeira...", this.preco_madeira);
  }

  //Cimento
  public area_cimento: number;
  public preco_cimento: number;
  public qtd_cimento: number = 0;
  public gasto_cimento: string = '0';

  calcular_cimento() {
    console.log("Calculando quantidade de cimento...", this.area_cimento);
    console.log("Calculando quantidade de cimento...", this.preco_cimento);
  }
}

