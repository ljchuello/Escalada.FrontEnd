/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';


@Injectable({ providedIn: 'root' })
export class AplicacionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAplicacionPost()` */
  static readonly ApiAplicacionPostPath = '/api/Aplicacion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionPost$Plain$Response(
    params?: {
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

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
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
  apiAplicacionPost$Plain(
    params?: {
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
    return this.apiAplicacionPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionPost$Json$Response(
    params?: {
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

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
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
  apiAplicacionPost$Json(
    params?: {
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
    return this.apiAplicacionPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `apiAplicacionDelete()` */
  static readonly ApiAplicacionDeletePath = '/api/Aplicacion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionDelete$Plain$Response(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<boolean>> {
    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionDeletePath, 'delete');
    if (params) {
      rb.query('token', params.token, {});
      rb.query('aplicacionId', params.aplicacionId, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionDelete$Plain(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<boolean> {
    return this.apiAplicacionDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionDelete$Json$Response(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<boolean>> {
    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionDeletePath, 'delete');
    if (params) {
      rb.query('token', params.token, {});
      rb.query('aplicacionId', params.aplicacionId, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionDelete$Json(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<boolean> {
    return this.apiAplicacionDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `apiAplicacionRebuildPut()` */
  static readonly ApiAplicacionRebuildPutPath = '/api/Aplicacion/rebuild';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionRebuildPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionRebuildPut$Plain$Response(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<boolean>> {
    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionRebuildPutPath, 'put');
    if (params) {
      rb.query('token', params.token, {});
      rb.query('aplicacionId', params.aplicacionId, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionRebuildPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionRebuildPut$Plain(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<boolean> {
    return this.apiAplicacionRebuildPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAplicacionRebuildPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionRebuildPut$Json$Response(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<boolean>> {
    const rb = new RequestBuilder(this.rootUrl, AplicacionService.ApiAplicacionRebuildPutPath, 'put');
    if (params) {
      rb.query('token', params.token, {});
      rb.query('aplicacionId', params.aplicacionId, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAplicacionRebuildPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAplicacionRebuildPut$Json(
    params?: {
      token?: string;
      aplicacionId?: string;
    },
    context?: HttpContext
  ): Observable<boolean> {
    return this.apiAplicacionRebuildPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
