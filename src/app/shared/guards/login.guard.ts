import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {lastValueFrom, Observable} from 'rxjs';
import {Helper} from '../class/helper';
import {AuthService} from '../../api/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {OAuth} from '../../api/models/o-auth';
import {Enlace} from '../../Config';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  helper: Helper = new Helper();

  constructor(
    private authService: AuthService,
    private router: Router,
    private matSnackbar: MatSnackBar,
  ) {
  }

  // @ts-ignore
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<boolean> | Promise<boolean> | boolean> {
    try {
      let oAuth: OAuth = this.helper.GetAuth();
      let check = await lastValueFrom(this.authService.apiAuthTokenGet$Json({
        token: oAuth.token!
      }));
      if (!check) {
        this.helper.Show('Debe iniciar sesión', this.matSnackbar);
        this.router.navigate(['', Enlace.Auth]).then();
      }
      return true;
    } catch (err) {
      console.log('No se ha podido verificar el token, inicie sesión.');
      this.router.navigate(['', Enlace.Auth]).then();
    }
  }

}
