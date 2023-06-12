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


@Injectable({
  providedIn: 'root',
})
export class AplicacionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAplicacionGet
   */
  static readonly ApiAplicacionGetPath = '/api/Aplicacion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.apiAplicacionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.apiAplicacionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiAplicacionPost
   */
  static readonly ApiAplicacionPostPath = '/api/Aplicacion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionPost$Plain$Response(params?: {
    token?: string;
    datacenterId?: number;
    plataformaId?: string;
    descripcion?: string;
    serverTypeId?: number;
    multiServer?: boolean;
    serverMin?: number;
    serverMax?: number;
    hetznerApiKey?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionPostPath, 'post');
    if (params) {
      rb.query('token', params.token, {});
      rb.query('datacenterId', params.datacenterId, {});
      rb.query('plataformaId', params.plataformaId, {});
      rb.query('descripcion', params.descripcion, {});
      rb.query('serverTypeId', params.serverTypeId, {});
      rb.query('multiServer', params.multiServer, {});
      rb.query('serverMin', params.serverMin, {});
      rb.query('serverMax', params.serverMax, {});
      rb.query('hetznerApiKey', params.hetznerApiKey, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionPost$Plain(params?: {
    token?: string;
    datacenterId?: number;
    plataformaId?: string;
    descripcion?: string;
    serverTypeId?: number;
    multiServer?: boolean;
    serverMin?: number;
    serverMax?: number;
    hetznerApiKey?: string;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.apiAplicacionPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionPost$Json$Response(params?: {
    token?: string;
    datacenterId?: number;
    plataformaId?: string;
    descripcion?: string;
    serverTypeId?: number;
    multiServer?: boolean;
    serverMin?: number;
    serverMax?: number;
    hetznerApiKey?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionPostPath, 'post');
    if (params) {
      rb.query('token', params.token, {});
      rb.query('datacenterId', params.datacenterId, {});
      rb.query('plataformaId', params.plataformaId, {});
      rb.query('descripcion', params.descripcion, {});
      rb.query('serverTypeId', params.serverTypeId, {});
      rb.query('multiServer', params.multiServer, {});
      rb.query('serverMin', params.serverMin, {});
      rb.query('serverMax', params.serverMax, {});
      rb.query('hetznerApiKey', params.hetznerApiKey, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionPost$Json(params?: {
    token?: string;
    datacenterId?: number;
    plataformaId?: string;
    descripcion?: string;
    serverTypeId?: number;
    multiServer?: boolean;
    serverMin?: number;
    serverMax?: number;
    hetznerApiKey?: string;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.apiAplicacionPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
