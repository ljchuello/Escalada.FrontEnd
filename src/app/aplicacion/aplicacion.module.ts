import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AplicacionRoutingModule} from './aplicacion-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {NuevoComponent} from './pages/nuevo/nuevo.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [
    IndexComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule,
    MaterialModule,
  ]
})
export class AplicacionModule {
}
