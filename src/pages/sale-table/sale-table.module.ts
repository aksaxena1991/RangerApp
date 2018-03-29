import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleTablePage } from './sale-table';

@NgModule({
  declarations: [
    SaleTablePage,
  ],
  imports: [
    IonicPageModule.forChild(SaleTablePage),
  ],
})
export class SaleTablePageModule {}
