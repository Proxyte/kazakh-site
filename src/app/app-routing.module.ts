import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'cards',
    component:MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
