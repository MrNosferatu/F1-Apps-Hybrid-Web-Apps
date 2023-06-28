import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F1DriversPageRoutingModule } from './f1-drivers-routing.module';

import { F1DriversPage } from './f1-drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F1DriversPageRoutingModule
  ],
  declarations: [F1DriversPage]
})
export class F1DriversPageModule {}
