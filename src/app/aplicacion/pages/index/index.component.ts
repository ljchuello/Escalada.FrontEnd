import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Enlace} from '../../../Config';
import {MatTableDataSource} from "@angular/material/table";
import {OAplicacion} from "../../../api/models/o-aplicacion";
import {AplicacionService} from "../../../api/services/aplicacion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Helper} from "../../../shared/class/helper";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  helper: Helper = new Helper()

  constructor(
    private router: Router,
    private aplicacionService: AplicacionService,
    private matSnackBar: MatSnackBar,
  ) {
  }

  // Columnas a mostrar
  displayedColumns: string[] = ['codigo', 'descripcion', 'url', 'addAt', 'checkUlt', 'capacidad', 'id'];

  // Datasource
  dataSource: MatTableDataSource<OAplicacion> = new MatTableDataSource<OAplicacion>();

  async ngOnInit(): Promise<void> {
    try {
      let listApp: OAplicacion[] = await lastValueFrom(this.aplicacionService.apiAplicacionGet$Json({
        token: this.helper.GetAuth().token!,
      }))
      this.dataSource = new MatTableDataSource(listApp);
    } catch (err) {
      this.helper.Err(err, this.matSnackBar)
    }
  }

  btnNuevo() {
    this.router.navigate(['/', Enlace.Aplicacion, Enlace.AtAdd])
  }

}
