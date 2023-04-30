import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OClaveValorS} from '../../../api/models/o-clave-valor-s';
import {ServerType} from '../../../api/models/server-type';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Helper} from '../../../shared/class/helper';
import {MatSnackBar} from '@angular/material/snack-bar';
import {lastValueFrom} from 'rxjs';
import {HetznerService} from '../../../api/services/hetzner.service';
import {PlataformaService} from '../../../api/services/plataforma.service';
import {Location} from '../../../api/models/location';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit, AfterContentChecked {

  block: boolean = true;
  helper: Helper = new Helper();

  constructor(
    private fb: UntypedFormBuilder,
    private matSnackBar: MatSnackBar,
    private hetznerService: HetznerService,
    private plataformaService: PlataformaService,
    private ref: ChangeDetectorRef,
  ) {
  }

  listEntorno: OClaveValorS[] = [];
  listLocation: Location[] = [];
  listServerType: ServerType[] = [];

  // Reactivo
  miForm: UntypedFormGroup = null!;

  // Var
  applicationName: string = '';
  aplicacionPlataforma: string = '';
  aplicacionUbicacion: number = 0;
  aplicacionServidorId: number = 0;

  // Build
  build() {
    this.miForm = this.fb.group({
      applicationName: [{value: this.applicationName}, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      aplicacionPlataforma: [{value: this.aplicacionPlataforma}, [Validators.required]],
      aplicacionUbicacion: [{value: this.aplicacionUbicacion}, [Validators.required, Validators.min(1)]],
      aplicacionServidorId: [{value: this.aplicacionServidorId}, [Validators.required, Validators.min(1)]],
    });
  }

  async ngOnInit() {
    try {
      // Construimos
      this.build();

      // Obtenemos plataforma
      this.listEntorno = await lastValueFrom(this.plataformaService.apiPlataformaGet$Json({
        token: this.helper.GetAuth()!.token!,
      }));

      // Obtenemos las locaciones
      this.listLocation = await lastValueFrom(this.hetznerService.apiHetznerLocationGet$Json({
        token: this.helper.GetAuth()!.token!,
      }));

      // Obtenemos los tipos de servidor
      this.listServerType = await lastValueFrom(this.hetznerService.apiHetznerServerTypeGet$Json({
        token: this.helper.GetAuth()!.token!,
      }));

    } catch (err) {
      this.helper.Err(err, this.matSnackBar);
    }
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  getFlat(row: Location) {
    if (row != Location) {
      return `https://flagicons.lipis.dev/flags/4x3/${row.country!.toLowerCase()}.svg`;
    } else
      return `https://flagicons.lipis.dev/flags/4x3/us.svg`;
  }

  getServerType(amd: boolean, shared: boolean): ServerType[] {
    try {
      // Obtenemos
      let current: ServerType[] = this.listServerType;

      // Filtramos
      if (this.aplicacionUbicacion! > 0) {

        // Obtenemos la ubicación actual
        let actual: Location = this.listLocation.find(x => x!.id! == this.aplicacionUbicacion)!;

        // Filtramos
        current = this.listServerType.filter(x => x!.prices!.filter(y => y.location == actual.name));
      }

      // amd - shared
      if (amd && shared) {
        return current.filter(x => x.cpu_type == 'shared' && x.name!.toLowerCase().includes('cpx'));
      }
      // amd - dicated
      if (amd && !shared) {
        return current.filter(x => x.cpu_type == 'dedicated' && x.name!.toLowerCase().includes('ccx') && x.name!.substr(4, 1) === '2');
      }
      // intel - shared
      if (!amd && shared) {
        return current.filter(x => x.cpu_type == 'shared' && x.name!.toLowerCase().includes('cx'));
      }
      // intel - dicated
      if (!amd && !shared) {
        return current.filter(x => x.cpu_type == 'dedicated' && x.name!.toLowerCase().includes('ccx') && x.name!.substr(4, 1) === '1');
      }

      // Nel
      return [];
    } catch (err) {
      return [];
    }
  }

}
