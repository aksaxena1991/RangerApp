import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, LoadingController,NavController,Platform } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',

})
export class SigninPage {
loading:any;
creds:any = {};
  constructor(private authService:AuthServiceProvider, private loadingCtrl:LoadingController, private viewCtrl: ViewController, private navParams: NavParams, private navCtrl:NavController,private platform:Platform) {
    this.platform.ready().then(() => {
    });
    this.creds = {
      username:'',
      password:''
    };

  }
    closeSigninPopup(){
    this.viewCtrl.dismiss();
  }

  doSignin(creds) {
    this.showLoader();
    this.authService.authenticate(creds).then((data)=>{
      if(data)
      {
        this.loading.dismiss();
        this.navCtrl.setRoot('MenuPage');
      }
    });



  }
  showLoader(){
      this.loading =this.loadingCtrl.create({
        content:'Authenticating...',
        duration:1000
      });
      this.loading.present();

  }


}
