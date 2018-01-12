import { User } from './../../models/user.model';
import { FirebaseListObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

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
  public gasto: string = '0.00';

  public tijolos: string = 'ceramico 8F';

  calcular_tijolo() {

    switch (this.tijolos) {
      case 'ceramico 8F':
        console.log('ceramico 8-F');
        var quantidade_tijolo: number = Math.round((this.area * 1) * 31);
        this.qtd = quantidade_tijolo;
        console.log("Quantidade:", this.qtd);

        var gasto_tijolo: number = (this.preco / 1000 * this.area * 1) * 31;
        this.gasto = gasto_tijolo.toFixed(2);
        console.log("Valor Gasto:", this.gasto);
        break;
      case 'ceramico 6F':
        console.log('ceramico 6-F');
        var quantidade_tijolo: number = Math.round((this.area * 1) * 44);
        this.qtd = quantidade_tijolo;
        console.log("Quantidade:", this.qtd);

        var gasto_tijolo: number = (this.preco / 1000 * this.area * 1) * 44;
        this.gasto = gasto_tijolo.toFixed(2);
        console.log("Valor Gasto:", this.gasto);
        break;
      case 'macico branco':
        console.log('ceramico 6-F');
        var quantidade_tijolo: number = Math.round((this.area * 1) * 55);
        this.qtd = quantidade_tijolo;
        console.log("Quantidade:", this.qtd);

        var gasto_tijolo: number = (this.preco / 1000 * this.area * 1) * 55;
        this.gasto = gasto_tijolo.toFixed(2);
        console.log("Valor Gasto:", this.gasto);
        break;
      case 'refratario':
        console.log('refratario');
        var quantidade_tijolo: number = Math.round((this.area * 1) * 94);
        this.qtd = quantidade_tijolo;
        console.log("Quantidade:", this.qtd);

        var gasto_tijolo: number = (this.preco / 1000 * this.area * 1) * 94;
        this.gasto = gasto_tijolo.toFixed(2);
        console.log("Valor Gasto:", this.gasto);
        break;
    };
  };

  //Telha ceramica
  public area_telha: number;
  public preco_telha: number;
  public inclinacao: string;
  public qtd_telha: number = 0;
  public gasto_telha: string = '0.00';

  public telhas: string = 'americana';

  calcular_telha() {

    switch (this.telhas) {
      case 'americana':
        console.log('americana');
        switch (this.inclinacao) {
          case '30':
            let quantidade_telha1: number = this.area_telha * 1.044;
            this.qtd_telha = Math.round(quantidade_telha1 * 18);
            break;
          case '31':
            let quantidade_telha2: number = this.area_telha * 1.047;
            this.qtd_telha = Math.round(quantidade_telha2 * 18);
            break;
          case '32':
            let quantidade_telha3: number = this.area_telha * 1.050;
            this.qtd_telha = Math.round(quantidade_telha3 * 18);
            break;
          case '33':
            let quantidade_telha4: number = this.area_telha * 1.053;
            this.qtd_telha = Math.round(quantidade_telha4 * 18);
            break;
          case '34':
            let quantidade_telha5: number = this.area_telha * 1.056;
            this.qtd_telha = Math.round(quantidade_telha5 * 18);
            break;
          case '35':
            let quantidade_telha6: number = this.area_telha * 1.059;
            this.qtd_telha = Math.round(quantidade_telha6 * 18);
            break;
          default:
            this.qtd_telha = 0;
            this.presentAlert();
        };

        break;

      case 'colonial':
        console.log('colonial');
        switch (this.inclinacao) {
          case '30':
            let quantidade_telha1: number = this.area_telha * 1.044;
            this.qtd_telha = Math.round(quantidade_telha1 * 27);
            break;
          case '31':
            let quantidade_telha2: number = this.area_telha * 1.047;
            this.qtd_telha = Math.round(quantidade_telha2 * 27);
            break;
          case '32':
            let quantidade_telha3: number = this.area_telha * 1.050;
            this.qtd_telha = Math.round(quantidade_telha3 * 27);
            break;
          case '33':
            let quantidade_telha4: number = this.area_telha * 1.053;
            this.qtd_telha = Math.round(quantidade_telha4 * 27);
            break;
          case '34':
            let quantidade_telha5: number = this.area_telha * 1.056;
            this.qtd_telha = Math.round(quantidade_telha5 * 27);
            break;
          case '35':
            let quantidade_telha6: number = this.area_telha * 1.059;
            this.qtd_telha = Math.round(quantidade_telha6 * 27);
            break;
          default:
            this.qtd_telha = 0;
            this.presentAlert();
        };

        break;

      case 'italiana':
        console.log('italiana');
        switch (this.inclinacao) {
          case '30':
            let quantidade_telha1: number = this.area_telha * 1.044;
            this.qtd_telha = Math.round(quantidade_telha1 * 16);
            break;
          case '31':
            let quantidade_telha2: number = this.area_telha * 1.047;
            this.qtd_telha = Math.round(quantidade_telha2 * 16);
            break;
          case '32':
            let quantidade_telha3: number = this.area_telha * 1.050;
            this.qtd_telha = Math.round(quantidade_telha3 * 16);
            break;
          case '33':
            let quantidade_telha4: number = this.area_telha * 1.053;
            this.qtd_telha = Math.round(quantidade_telha4 * 16);
            break;
          case '34':
            let quantidade_telha5: number = this.area_telha * 1.056;
            this.qtd_telha = Math.round(quantidade_telha5 * 16);
            break;
          case '35':
            let quantidade_telha6: number = this.area_telha * 1.059;
            this.qtd_telha = Math.round(quantidade_telha6 * 16);
            break;
          default:
            this.qtd_telha = 0;
            this.presentAlert();
        };

        break;

      case 'romana':
        console.log('romana');
        switch (this.inclinacao) {
          case '30':
            let quantidade_telha1: number = this.area_telha * 1.044;
            this.qtd_telha = Math.round(quantidade_telha1 * 18);
            break;
          case '31':
            let quantidade_telha2: number = this.area_telha * 1.047;
            this.qtd_telha = Math.round(quantidade_telha2 * 18);
            break;
          case '32':
            let quantidade_telha3: number = this.area_telha * 1.050;
            this.qtd_telha = Math.round(quantidade_telha3 * 18);
            break;
          case '33':
            let quantidade_telha4: number = this.area_telha * 1.053;
            this.qtd_telha = Math.round(quantidade_telha4 * 18);
            break;
          case '34':
            let quantidade_telha5: number = this.area_telha * 1.056;
            this.qtd_telha = Math.round(quantidade_telha5 * 18);
            break;
          case '35':
            let quantidade_telha6: number = this.area_telha * 1.059;
            this.qtd_telha = Math.round(quantidade_telha6 * 18);
            break;
          default:
            this.qtd_telha = 0;
            this.presentAlert();
        };

        break;

      case 'portuguesa':
        console.log('portuguesa');
        switch (this.inclinacao) {
          case '30':
            let quantidade_telha1: number = this.area_telha * 1.044;
            this.qtd_telha = Math.round(quantidade_telha1 * 19);
            break;
          case '31':
            let quantidade_telha2: number = this.area_telha * 1.047;
            this.qtd_telha = Math.round(quantidade_telha2 * 19);
            break;
          case '32':
            let quantidade_telha3: number = this.area_telha * 1.050;
            this.qtd_telha = Math.round(quantidade_telha3 * 19);
            break;
          case '33':
            let quantidade_telha4: number = this.area_telha * 1.053;
            this.qtd_telha = Math.round(quantidade_telha4 * 19);
            break;
          case '34':
            let quantidade_telha5: number = this.area_telha * 1.056;
            this.qtd_telha = Math.round(quantidade_telha5 * 19);
            break;
          case '35':
            let quantidade_telha6: number = this.area_telha * 1.059;
            this.qtd_telha = Math.round(quantidade_telha6 * 19);
            break;
          default:
            this.qtd_telha = 0;
            this.presentAlert();
        };

        break;

    };
    let gasto_telha: number = (this.preco_telha / 1000 * this.qtd_telha);
    this.gasto_telha = gasto_telha.toFixed(2);
  };

  //Madeira
  public largura: number;
  public comprimento: number;
  public espacamento: number;
  public preco_madeira: number;
  public qtd_madeira: number = 0;
  public gasto_madeira: string = '0.00';

  public madeira: string = 'linha';

  calcular_madeira() {
    switch (this.madeira) {
      case 'linha':
        console.log('linha');
        let larg = this.largura;
        console.log(larg);
        this.qtd_madeira = this.largura / this.espacamento;
        this.qtd_madeira = Math.round(this.qtd_madeira - 1);
        break;
      case 'caibro':
        console.log('caibro');
        let larg1 = this.largura;
        console.log(larg1);
        this.qtd_madeira = this.largura / (this.espacamento / 100);
        this.qtd_madeira = Math.round(this.qtd_madeira + 2);
        break;
      case 'ripa':
        console.log('ripa');
        let larg2 = this.largura;
        console.log(larg2);
        this.qtd_madeira = this.largura / (this.espacamento / 100);
        this.qtd_madeira = Math.round(this.qtd_madeira + 2);
        break;
    };
    var gasto_madeira: number = this.preco_madeira * (this.qtd_madeira * this.comprimento);
    this.gasto_madeira = gasto_madeira.toFixed(2);
    console.log("Valor Gasto:", this.gasto_madeira);
    //break;
  };

  //Cimento
  public area_cimento: number;
  public preco_cimento: number;
  public qtd_cimento: number = 0;
  public gasto_cimento: number = 0.00;

  public cimento: string = 'alvenaria';

  calcular_cimento() {
    switch (this.cimento) {
      case 'alvenaria':
        console.log('Alvenaria 4/1');
        //Alvenaria
        this.qtd_cimento = Math.round(this.area_cimento / 12);
        console.log("QTD: ", this.qtd_cimento);

        this.gasto_cimento = this.qtd_cimento * this.preco_cimento;
        console.log("Gasto:", this.gasto_cimento);
        break;
      case 'reboco': 
        console.log('reboco');
        this.qtd_cimento = Math.round(this.area_cimento / 25);
        console.log(this.qtd_cimento);

        this.gasto_cimento = this.qtd_cimento * this.preco_cimento;
        console.log("Gasto:", this.gasto_cimento);
        break;
    };
  ;}
};
