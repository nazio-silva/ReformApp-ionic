import { AuthService } from './../../providers/auth/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CadastroPage } from './../cadastro/cadastro';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Loading } from 'ionic-angular/components/loading/loading';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  singForm: FormGroup;

  constructor(
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams) {
  
    let emailRegex = "[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+";

    this.singForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {

    let loading: Loading = this.showLoading()

    this.authService.signinWithEmail(this.singForm.value)
      .then((isLogged: boolean) => {
        if(isLogged) {
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }
      }).catch((error: any) => {
        console.log(error);
        loading.dismiss();
        this.showAlert(error);
      })
    
  }

  goToCadastro() {
    this.navCtrl.push(CadastroPage);
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: "Carregando..."
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string) {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

}
 