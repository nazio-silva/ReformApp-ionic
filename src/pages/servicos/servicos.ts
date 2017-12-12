import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  searchQuery: string = '';
  servicos: string[];

  constructor(
    public navCtrl: NavController) {
    this.initializeServicos();
  }

  initializeServicos() {
    this.servicos = [ 
      'Pedreiro',
      'Eletricista',
      'Bombeiro',
    ];
  }

  getServicos(ev: any) {
    
    this.initializeServicos();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.servicos = this.servicos.filter((servico) => {
        return (servico.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
