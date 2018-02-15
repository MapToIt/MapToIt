//Angular Imports
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component Imports
import { HomeComponent }        from './home/home.component';

const routes: Routes = [
  //New routes should be added to this array
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
