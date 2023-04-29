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

import { OClaveValorS } from '../models/o-clave-valor-s';

@Injectable({
  providedIn: 'root',
})
export class PlataformaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPlataformaGet
   */
  static readonly ApiPlataformaGetPath = '/api/Plataforma';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlataformaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlataformaGet$Plain$Response(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OClaveValorS>>> {

    const rb = new RequestBuilder(this.rootUrl, PlataformaService.ApiPlataformaGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OClaveValorS>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlataformaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlataformaGet$Plain(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<Array<OClaveValorS>> {

    return this.apiPlataformaGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OClaveValorS>>) => r.body as Array<OClaveValorS>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlataformaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlataformaGet$Json$Response(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OClaveValorS>>> {

    const rb = new RequestBuilder(this.rootUrl, PlataformaService.ApiPlataformaGetPath, 'get');
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
        return r as StrictHttpResponse<Array<OClaveValorS>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlataformaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlataformaGet$Json(params?: {
    token?: string;
  },
  context?: HttpContext

): Observable<Array<OClaveValorS>> {

    return this.apiPlataformaGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OClaveValorS>>) => r.body as Array<OClaveValorS>)
    );
  }

}
