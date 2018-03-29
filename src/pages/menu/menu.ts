import { ProfilePage } from './../profile/profile';
import { BankDetailsPage } from './../bank-details/bank-details';

import { DashboardPage } from './../dashboard/dashboard';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';
  @ViewChild(Nav) nav: Nav;
//
  pages: PageInterface[] = [
    { title: 'Dashboard', pageName: 'TabsPage', tabComponent: 'DashboardPage', index: 0, icon: 'home' },

    { title: 'My Network', pageName: 'TabsPage', tabComponent: 'NetworkPage', index: 1, icon: 'people' },
    { title: 'My Profile', pageName: 'ProfilePage', icon: 'person' },
    { title: 'My Bank Details', pageName: 'BankDetailsPage', icon: 'cash' },
    { title: 'Settings', pageName: 'TabsPage',tabComponent: 'SettingsPage', index: 2, icon: 'settings' },
  ];

  constructor(public navCtrl: NavController, public navParams:NavParams) { }
    openPage(page: PageInterface) {
    let params = {};
if (page.index) {
      params = { tabIndex: page.index };
    }
if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
  logout(){
    this.navCtrl.setRoot('IndexPage')
  }

}
