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
import {Datacenter} from '../../../api/models/datacenter';

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
  listDataCenter: Datacenter[] = [];
  listServerType: ServerType[] = [];

  // Reactivo
  miForm: UntypedFormGroup = null!;

  // Var
  applicationName: string = '';
  aplicacionPlataforma: string = '';
  ubicacionId: number = 0;
  aplicacionServidorId: number = 0;

  // Build
  build() {
    this.miForm = this.fb.group({
      applicationName: [{value: this.applicationName}, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      aplicacionPlataforma: [{value: this.aplicacionPlataforma}, [Validators.required]],
      ubicacionId: [{value: this.ubicacionId}, [Validators.required, Validators.min(1)]],
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
      this.listDataCenter = await lastValueFrom(this.hetznerService.apiHetznerDatacenterGet$Json({
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

  getServerType(cpu_type: string, architecture: string): ServerType[] {
    try {
      // Obtenemos
      let current: ServerType[] = this.listServerType!;

      // Filtramos
      current = current.filter(x => x!.cpu_type! == cpu_type && x!.architecture! == architecture!);

      // Filtramos
      if (this.ubicacionId! > 0) {
        // Obtenemos la ubicación
        let ubiActual: Datacenter = this.listDataCenter.find(x => x.location!.id! == this.ubicacionId!)!;

        // Obtenemos la ubicación actual
        current = current.filter(x => x!.prices!.filter(y => y!.location! == ubiActual!.name!))!;

        // Devolvemos
        return current;
      } else {
        return current;
      }
    } catch (err) {
      return [];
    }
  }

}
