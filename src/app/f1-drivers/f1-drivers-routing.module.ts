import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F1DriversPage } from './f1-drivers.page';

const routes: Routes = [
  {
    path: '',
    component: F1DriversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F1DriversPageRoutingModule {}
