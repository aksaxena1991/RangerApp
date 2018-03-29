import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'DashboardPage';
  tab2Root = 'SaleTablePage';
  tab3Root = 'SaleGraphPage';
  tab4Root = 'SettingsPage';
  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
