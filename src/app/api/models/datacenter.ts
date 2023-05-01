/* tslint:disable */
/* eslint-disable */
import { Location } from './location';
import { ServerTypes } from './server-types';
export interface Datacenter {
  description?: null | string;
  id?: number;
  location?: Location;
  name?: null | string;
  serverTypes?: ServerTypes;
}
