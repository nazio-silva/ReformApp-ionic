import { ServicosPage } from './../pages/servicos/servicos';
import { UserService } from './../providers/user/user.service';

import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule, FirebaseAppConfig, FirebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from '../providers/auth/auth.service';
import { ProjetosPage } from '../pages/projetos/projetos';

export const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCmdQvGkLnpyI17uWiOhS64aBI8fp4bo4s",
  authDomain: "reformapp-74d5a.firebaseapp.com",
  databaseURL: "https://reformapp-74d5a.firebaseio.com",
  //projectId: "reformapp-74d5a",
  storageBucket: "reformapp-74d5a.appspot.com",
  //messagingSenderId: "620906092349"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroPage,
    ProjetosPage,
    ServicosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroPage,
    ProjetosPage,
    ServicosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
