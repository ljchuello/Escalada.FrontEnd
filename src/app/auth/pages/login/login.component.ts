import {Component, OnInit} from '@angular/core';
import {Enlace} from '../../../Config';
import {OAuth} from '../../../api/models/o-auth';
import {Helper} from '../../../shared/class/helper';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../../api/services/auth.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // Versión
  version: string = Enlace.Version;

  /* Utilizado para mostrar la contraseña */
  _hide: boolean = true;

  // utilizado para bloquear los botones
  _block: boolean = false;

  _authLogin: OAuth = {};

  // Utilizado para las notificaciones
  helper: Helper = new Helper();

  constructor(
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // this._token = this.helper.;
  }

  async login() {
    if (this._block) return;
    this._block = true;
    try {
      // Hacemos la solicitud
      let oauth: OAuth = await lastValueFrom(this.authService.apiAuthPost$Json({
        body: this._authLogin,
      }))

      // Guardamos en el localstorage
      localStorage.setItem('token', JSON.stringify(oauth));

      // Redireccionamos
      await this.router.navigate(['/', Enlace.Home]);
    } catch (ex) {
      this.helper.Err(ex, this.matSnackBar);
    } finally {
      this._block = false;
    }
  }

}
