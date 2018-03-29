import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {AbstractControl,ValidatorFn,Validators,FormControl,FormGroup} from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit{
  User:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }
  doSignup(){

  }
  ngOnInit(){
    this.User = new FormGroup({
      fullname:new FormControl('',[Validators.required,Validators.minLength(4)]),
      email:new FormControl('',[Validators.required,Validators.email])
    });
  }
  closeSignupPopup(){
    this.viewCtrl.dismiss();
  }
}
