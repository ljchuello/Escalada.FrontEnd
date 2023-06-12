import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AplicacionRoutingModule} from './aplicacion-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {NuevoComponent} from './pages/nuevo/nuevo.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardServerTypeComponent } from './components/card-server-type/card-server-type.component';


@NgModule({
  declarations: [
    IndexComponent,
    NuevoComponent,
    CardServerTypeComponent
  ],
    imports: [
        CommonModule,
        AplicacionRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class AplicacionModule {
}
