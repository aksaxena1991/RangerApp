import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleGraphPage } from './sale-graph';

@NgModule({
  declarations: [
    SaleGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleGraphPage),
  ],
})
export class SaleGraphPageModule {}
