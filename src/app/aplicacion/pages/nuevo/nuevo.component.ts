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
import {AplicacionService} from '../../../api/services/aplicacion.service';
import {Router} from '@angular/router';
import {Enlace} from '../../../Config';

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
    private aplicacionService: AplicacionService,
    private router: Router,
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
  multiServer: boolean = true;
  terminoCondiciones: boolean = false;
  serverMin: number = 1;
  serverMax: number = 1;
  hetznerApiToken: string = '';

  // Build
  build() {
    this.miForm = this.fb.group({
      applicationName: [{value: this.applicationName}, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      aplicacionPlataforma: [{value: this.aplicacionPlataforma}, [Validators.required]],
      ubicacionId: [{value: this.ubicacionId}, [Validators.required, Validators.min(1)]],
      aplicacionServidorId: [{value: this.aplicacionServidorId}, [Validators.required, Validators.min(1)]],
      multiServer: [{value: this.multiServer}, [Validators.required,]],
      serverMin: [{value: this.serverMin}, [Validators.required, Validators.min(1), Validators.max(150)]],
      serverMax: [{value: this.serverMax}, [Validators.required, Validators.min(1), Validators.max(150)]],
      hetznerApiToken: [{value: this.hetznerApiToken}, [Validators.required, Validators.min(1), Validators.max(150)]],
      terminoCondiciones: [{value: this.terminoCondiciones}, [Validators.required,]],
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
    } finally {
      this.block = false;
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

        // Datacenter
        let datacenter = this.listDataCenter!.find(x => x.id == this.ubicacionId!)!;

        // Filtramos por ubicación
        current = current!.filter(x => datacenter!.serverTypes!.available!.includes(x!.id!));

        // Devolvemos
        return current;
      } else {
        return current;
      }
    } catch (err) {
      return [];
    }
  }

  async btnEnviar() {
    if (this.block)
      return;
    this.block = true;
    try {
      // Ensuciamos
      this.miForm.markAllAsTouched();
      // Validamos
      if (this.miForm.invalid) {
        this.helper.Show('There are invalid fields', this.matSnackBar);
        return;
      }
      // Términos y condiciones
      if (!this.terminoCondiciones) {
        this.helper.Show('In order to continue you must accept the terms and conditions', this.matSnackBar);
        return;
      }
      // Creamos
      await lastValueFrom(this.aplicacionService.apiAplicacionPost$Json({
        token: this.helper.GetAuth()!.token!,
        datacenterId: this.ubicacionId!,
        plataformaId: this.aplicacionPlataforma!,
        descripcion: this.applicationName,
        serverTypeId: this.aplicacionServidorId,
        multiServer: this.multiServer,
        serverMin: this.serverMin,
        serverMax: this.serverMax,
        hetznerApiKey: this.hetznerApiToken,
      }));
      // Libre de pecados
      this.helper.Show(`The application ${this.applicationName} has been created successfully`, this.matSnackBar);
      // Redireccionamos
      this.router.navigate(['/', Enlace.Aplicacion]);
    } catch (err) {
      this.helper.Err(err, this.matSnackBar);
    } finally {
      this.block = false;
    }
  }

}
