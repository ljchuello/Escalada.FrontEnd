// noinspection RedundantIfStatementJS
import {MatSnackBar} from '@angular/material/snack-bar';
import {UntypedFormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {OAuth} from '../../api/models/o-auth';

// noinspection JSUnusedLocalSymbols
export class Helper {

  GetId(activatedRoute: ActivatedRoute) {
    try {
      return activatedRoute.snapshot.paramMap.get('id')!;
    } catch (err) {
      return '';
    }
  }

  soloNumeros(a: any): boolean {
    let charCode = (a.which) ? a.which : a.keyCode;
    // Del/Sup
    if (charCode == 8 || charCode == 46) {
      return true;
    }
    // Izquierda/Derecha
    if (charCode == 37 || charCode == 39) {
      return true;
    }
    // Shits / Inicio / Fin
    if (charCode == 35 || charCode == 36 || charCode == 16) {
      return true;
    }
    // Punto ( . )
    if (charCode == 110 || charCode == 190) {
      let contenido = a.target.value;
      return contenido.indexOf('.') == -1;
    }
    // Solo numero
    if ((charCode >= 96 && charCode <= 105) || (charCode >= 48 && charCode <= 57)) {
      return true;
    }
    // Nel perro
    return false;
  }

  /**
   * Muestra notificaciones
   * @param txt
   * @param snack
   * @constructor
   */
  Show(txt: string, snack: MatSnackBar) {
    snack.open(txt, '❌', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 5000,
    });
  }

  /**
   * Obtiene el oAuth
   * @constructor
   */
  GetAuth(): OAuth {
    let oAuth: OAuth = {};
    try {
      // Leemos
      let json = localStorage.getItem('token')!;
      // Validamos
      if (json) {
        // Set
        oAuth = JSON.parse(json);
      }
      // Devolvemos
      return oAuth;
    } catch (err) {
      console.log('MatSnackBatExt - GetAuth');
      return oAuth;
    }
  }

  /**
   * Muestra un error
   * @param err
   * @param snack
   * @constructor
   */
  Err(err: any, snack: MatSnackBar) {
    try {
      console.log('a');
      console.log(err);
      if (err.status !== 0) {
        // this.Show(err.error, snack);
        if (err.error === 'noLogin') {
          this.Show('Debe iniciar sesión', snack);
        } else {
          this.Show(err.error, snack);
        }
      } else {
        this.Show('No hay conexión a internet 🙊', snack);
      }
    } catch (errLocal) {
      this.Show('Ah ocurrido un error inesperado 🤓', snack);
    }
  }

  /**
   * Redondea un número
   * @param value
   * @param dig
   * @constructor
   */
  Redondear(value: number, dig: number): number {
    let x = Math.pow(10, dig);
    return Math.round(value * x) / x;
  }

  ngModChaGetGum(a: any, dig: number = 2): number {
    try {
      let value: number = Number(a.target.value.split(',').join(''));
      value = this.Redondear(value, dig);
      if (isNaN(value)) {
        value = 0;
      }
      return value;
    } catch (err) {
      return 0;
    }
  }

  /**
   * Obtiene un texto
   * @param a
   */
  ngModChanGetString(a: any): string {
    return a.target.value;
  }

  ngModChanGetDate_DateToString(a: any): string {
    // let nDate: string;
    // // @ts-ignore
    // nDate = a;
    // return nDate;
    try {
      a = a.toDate();
    } catch (err) {
      //console.log(oin);
    }
    a.setHours(0, 0, 0, 0);
    let nDate: string;
    nDate = a;
    return nDate;
  }

  ngModChanGetDate_StringToDate(a: string): Date {
    let nDate: Date;
    // @ts-ignore
    nDate = a;
    return nDate;
  }

  /**
   * Válida si es campo es inválido
   * @param campo
   * @param form
   * @constructor
   */
  FgCampoInvalido(campo: string, form: UntypedFormGroup) {
    return form.controls[campo].errors && form.controls[campo].touched;
  }

  /**
   * Convierte un fichero en base64
   * @param file
   * @constructor
   */
  FileToBase64(file: File): Observable<string> {
    return new Observable(x => {
      let base64: string = '';
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let data = reader.result as string;
        data = data.replace('data:', '');
        data = data.replace(/^.+,/, '');
        base64 = data;
      };
    });
  }
}

export enum Accion {
  None,
  Add,
  Edit,
  Delete,
}
