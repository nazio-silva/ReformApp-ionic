import { ServicosPage } from './../pages/servicos/servicos';
import { ProjetosPage } from './../pages/projetos/projetos';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LoginPage } from './../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage//LoginPage

  pages: Array<{title: string, component: any}>;
 
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Empresas', component: ListPage },     
      { title: 'Projetos', component: ProjetosPage },
      { title: 'Serviços', component: ServicosPage },      
      { title: 'Sair', component: LoginPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
