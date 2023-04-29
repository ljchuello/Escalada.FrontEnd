import {Component, OnInit} from '@angular/core';
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
export class NuevoComponent implements OnInit {

  block: boolean = true;
  helper: Helper = new Helper();

  constructor(
    private fb: UntypedFormBuilder,
    private matSnackBar: MatSnackBar,
    private hetznerService: HetznerService,
    private plataformaService: PlataformaService,
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
  aplicacionUbicacion: string = '';

  // Build
  build() {
    this.miForm = this.fb.group({
      applicationName: [{value: this.applicationName}, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      aplicacionPlataforma: [{value: this.aplicacionPlataforma}, [Validators.required]],
      aplicacionUbicacion: [{value: this.aplicacionUbicacion}, [Validators.required]],
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

}
