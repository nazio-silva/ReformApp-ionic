import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  public contador: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  curtir() {

    let x = 0;

    for( x = 0; x <= this.contador; x ++) {
      
    }
      this.contador = x;
  }
}
