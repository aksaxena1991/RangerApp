import { Component } from '@angular/core';
import { IonicPage, NavController,Platform, NavParams, ModalController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor( private platform:Platform, private geo:Geolocation,public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
    this.platform.ready().then(()=>{
      var options = {
        timeout:5000,
        enableHighAccuracy:true,
        maximumAge:0
      };
      this.geo.getCurrentPosition(options).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error);
      })
    });
  }
  showSigninPopup(){
    this.modalCtrl.create('SigninPage').present();
  }
  showSignupPopup(){
    this.modalCtrl.create('SignupPage').present();
  }

}
