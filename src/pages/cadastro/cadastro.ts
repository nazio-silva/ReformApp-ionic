import { FirebaseAuthState } from 'angularfire2';
import { User } from './../../models/user.model';
import { AuthService } from './../../providers/auth/auth.service';
import { HomePage } from './../home/home';
import { UserService } from './../../providers/user/user.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  //@ViewChild((Content)) content: Content;
  cadastroForm: FormGroup;

  constructor(
    public authService: AuthService,
    public userService: UserService,

    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {

    let emailRegex = "[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+";

    this.cadastroForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  onSubmit() {

    let loading: Loading = this.showLoading();
    let formUser = this.cadastroForm.value;

    this.authService.createAuthUser({
      email: formUser.email,
      password: formUser.password,
    }).then((authState: FirebaseAuthState) => {

      delete formUser.password;
      formUser.uid = authState.auth.uid;

      this.userService.create(formUser)
      .then(() => {
        console.log('Usuario cadastrado com sucesso!');
        loading.dismiss();
      }).catch((error: any) => {
        console.log(error);
        loading.dismiss();
        this.showAlert(error);
      });

    }).catch((error: any) => {
      console.log(error);
      loading.dismiss();
      this.showAlert(error);
    });
  }

  goToHomePage() {
    this.navCtrl.push(HomePage);
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Please wait...'
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
