import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Helper} from '../../class/helper';
import {Enlace} from '../../../Config';
import {OAuth} from '../../../api/models/o-auth';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  constructor(
    private matSnackbar: MatSnackBar,
  ) {
  }

  helper: Helper = new Helper();

  AuthUrl: string = Enlace.Auth;
  homeUrl: string = Enlace.Home;
  aplicacionUrl: string = Enlace.Aplicacion;

  oAuth: OAuth = {};

  ngOnInit(): void {
    try {
      let json = localStorage.getItem('token')!;
      if (json) {
        this.oAuth = JSON.parse(json);
      }
    } catch (err) {
      this.helper.Err(err, this.matSnackbar);
    }
  }

}
