import {Component, Input, OnInit} from '@angular/core';
import {ServerType} from '../../../api/models/server-type';

@Component({
  selector: 'app-card-server-type',
  templateUrl: './card-server-type.component.html',
  styleUrls: ['./card-server-type.component.css']
})
export class CardServerTypeComponent implements OnInit {

  @Input() row: ServerType = {};

  marca: string = 'N/A';

  ngOnInit() {
    // Shared
    if (this.row!.cpu_type == 'shared' && this.row!.architecture! == 'x86') {
      if (this.row!.name!.toLowerCase()!.includes('cx')) {
        this.marca = 'Intel';
      }
      if (this.row!.name!.toLowerCase()!.includes('cpx')) {
        this.marca = 'AMD';
      }
    }

    // Arm
    if (this.row!.cpu_type == 'shared' && this.row!.architecture! == 'arm') {
      if (this.row!.name!.toLowerCase()!.includes('cax')) {
        this.marca = 'Ampere';
      }
    }

    // Dedicated
    if (this.row!.cpu_type == 'dedicated' && this.row!.architecture! == 'x86') {
      if (this.row!.name!.toLowerCase()!.substr(4, 1)! == '1') {
        this.marca = 'Intel';
      }
      if (this.row!.name!.toLowerCase()!.substr(4, 1)! == '2') {
        this.marca = 'Amd';
      }
    }
  }

}
