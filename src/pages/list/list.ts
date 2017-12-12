import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  produtos: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.navParams.data;
  }

  buscarEmpresa() {
    console.log("Buscando  lista de Produtos da empresa.", {
      nome_produto:"feijao",
      preco_produto: "4.00",
    });
  }
}
