import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Enlace} from '../../../Config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  btnNuevo() {
    this.router.navigate(['/', Enlace.Aplicacion, Enlace.AtAdd])
  }

}
