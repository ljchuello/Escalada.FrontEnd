import {Component, Input} from '@angular/core';
import {ServerType} from '../../../api/models/server-type';

@Component({
  selector: 'app-card-server-type',
  templateUrl: './card-server-type.component.html',
  styleUrls: ['./card-server-type.component.css']
})
export class CardServerTypeComponent {

  @Input() row: ServerType = {};

}
