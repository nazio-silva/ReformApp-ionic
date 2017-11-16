import { CadastroPage } from './../cadastro/cadastro';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //public usuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      //this.usuario = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHomePage(u) {
    //console.log(this.usuario);
    this.navCtrl.push(HomePage);
  }

  goToCadastro() {
    this.navCtrl.push(CadastroPage);
  }

}
