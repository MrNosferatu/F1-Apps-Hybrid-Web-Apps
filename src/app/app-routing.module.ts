import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { F1DriversPage } from './f1-drivers/f1-drivers.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'f1-drivers',
    component: F1DriversPage
  },
  {
    path: 'drivers/:name',
    loadChildren: () => import('./f1-drivers/f1-drivers.module').then(m => m.F1DriversPageModule)
  },
  {
    path: 'events/:event',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
