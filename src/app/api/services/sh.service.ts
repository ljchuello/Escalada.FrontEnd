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
export class ShService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiShCoreLinuxX64Get()` */
  static readonly ApiShCoreLinuxX64GetPath = '/api/Sh/core-linux-x64';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShCoreLinuxX64Get$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreLinuxX64Get$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShCoreLinuxX64GetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShCoreLinuxX64Get$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreLinuxX64Get$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShCoreLinuxX64Get$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShCoreLinuxX64Get$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreLinuxX64Get$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShCoreLinuxX64GetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShCoreLinuxX64Get$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreLinuxX64Get$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShCoreLinuxX64Get$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiShCoreServiceGet()` */
  static readonly ApiShCoreServiceGetPath = '/api/Sh/core-service';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShCoreServiceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreServiceGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShCoreServiceGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShCoreServiceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreServiceGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShCoreServiceGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShCoreServiceGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreServiceGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShCoreServiceGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShCoreServiceGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShCoreServiceGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShCoreServiceGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiShNetcoreGet()` */
  static readonly ApiShNetcoreGetPath = '/api/Sh/netcore';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcoreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcoreGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShNetcoreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcoreGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcoreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcoreGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShNetcoreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcoreGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiShNetcoreServiceGet()` */
  static readonly ApiShNetcoreServiceGetPath = '/api/Sh/netcore-service';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcoreServiceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreServiceGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcoreServiceGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShNetcoreServiceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreServiceGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcoreServiceGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcoreServiceGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreServiceGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcoreServiceGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShNetcoreServiceGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcoreServiceGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcoreServiceGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
