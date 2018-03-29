import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Contacts, ContactFieldType, IContactFindOptions} from '@ionic-native/contacts';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  ourType:ContactFieldType[] = ['displayName'];
  contactsFound = [];
  constructor(private contacts:Contacts,public navCtrl: NavController, public navParams: NavParams) {
this.search('');
  }
  search(query)
  {
    const option:IContactFindOptions = {
      filter:query
    };
    this.contacts.find(this.ourType,option).then(cts =>{
      this.contactsFound = cts;
    });
  }
  onKeyUp(ev){
    this.search(ev.target.value);
  }

}
