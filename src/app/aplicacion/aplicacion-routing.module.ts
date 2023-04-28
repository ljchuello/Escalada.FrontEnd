import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterPageComponent} from '../shared/components/master-page/master-page.component';
import {IndexComponent} from './pages/index/index.component';
import {NuevoComponent} from './pages/nuevo/nuevo.component';
import {Enlace} from '../Config';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: Enlace.AtAdd,
        component: NuevoComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionRoutingModule {
}
