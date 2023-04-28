import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AplicacionRoutingModule} from './aplicacion-routing.module';
import {IndexComponent} from './pages/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule
  ]
})
export class AplicacionModule {
}
