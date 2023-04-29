/* tslint:disable */
/* eslint-disable */
import { Price } from './price';
export interface ServerType {
  architecture?: null | string;
  cores?: null | number;
  cpu_type?: null | string;
  description?: null | string;
  disk?: null | number;
  id?: null | number;
  memory?: null | number;
  name?: null | string;
  prices?: null | Array<Price>;
  storage_type?: null | string;
}
