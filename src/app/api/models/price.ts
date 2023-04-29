/* tslint:disable */
/* eslint-disable */
import { PriceHourly } from './price-hourly';
import { PriceMonthly } from './price-monthly';
export interface Price {
  location?: null | string;
  price_hourly?: PriceHourly;
  price_monthly?: PriceMonthly;
}
