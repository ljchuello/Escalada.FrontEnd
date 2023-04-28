import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {E404Component} from './components/e404/e404.component';
import {MasterPageComponent} from './components/master-page/master-page.component';
import {MaterialModule} from '../material/material.module';
import {RouterLink, RouterOutlet} from '@angular/router';


@NgModule({
  declarations: [
    E404Component,
    MasterPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    RouterOutlet,
  ]
})
export class SharedModule {
}
