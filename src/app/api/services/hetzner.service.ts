/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Datacenter } from '../models/datacenter';
import { ServerType } from '../models/server-type';

@Injectable({
  providedIn: 'root',
})
export class HetznerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiHetznerDatacenterGet
   */
  static readonly ApiHetznerDatacenterGetPath = '/api/Hetzner/datacenter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHetznerDatacenterGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerDatacenterGet$Plain$Response(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Datacenter>>> {

    const rb = new RequestBuilder(this.rootUrl, HetznerService.ApiHetznerDatacenterGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Datacenter>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHetznerDatacenterGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerDatacenterGet$Plain(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<Array<Datacenter>> {

    return this.apiHetznerDatacenterGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Datacenter>>) => r.body as Array<Datacenter>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHetznerDatacenterGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerDatacenterGet$Json$Response(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Datacenter>>> {

    const rb = new RequestBuilder(this.rootUrl, HetznerService.ApiHetznerDatacenterGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Datacenter>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHetznerDatacenterGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerDatacenterGet$Json(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<Array<Datacenter>> {

    return this.apiHetznerDatacenterGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Datacenter>>) => r.body as Array<Datacenter>)
    );
  }

  /**
   * Path part for operation apiHetznerServerTypeGet
   */
  static readonly ApiHetznerServerTypeGetPath = '/api/Hetzner/serverType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHetznerServerTypeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerServerTypeGet$Plain$Response(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ServerType>>> {

    const rb = new RequestBuilder(this.rootUrl, HetznerService.ApiHetznerServerTypeGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ServerType>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHetznerServerTypeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerServerTypeGet$Plain(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<Array<ServerType>> {

    return this.apiHetznerServerTypeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ServerType>>) => r.body as Array<ServerType>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHetznerServerTypeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerServerTypeGet$Json$Response(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ServerType>>> {

    const rb = new RequestBuilder(this.rootUrl, HetznerService.ApiHetznerServerTypeGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ServerType>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHetznerServerTypeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHetznerServerTypeGet$Json(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<Array<ServerType>> {

    return this.apiHetznerServerTypeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ServerType>>) => r.body as Array<ServerType>)
    );
  }

}
