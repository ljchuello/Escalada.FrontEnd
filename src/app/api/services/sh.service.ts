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

  /** Path part for operation `apiShNetcorex64Get()` */
  static readonly ApiShNetcorex64GetPath = '/api/Sh/netcorex64';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcorex64Get$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64Get$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcorex64GetPath, 'get');
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
   * To access the full response (for headers, for example), `apiShNetcorex64Get$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64Get$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcorex64Get$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcorex64Get$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64Get$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcorex64GetPath, 'get');
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
   * To access the full response (for headers, for example), `apiShNetcorex64Get$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64Get$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcorex64Get$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `apiShNetcorex64ServiceGet()` */
  static readonly ApiShNetcorex64ServiceGetPath = '/api/Sh/netcorex64-service';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcorex64ServiceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64ServiceGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcorex64ServiceGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiShNetcorex64ServiceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64ServiceGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcorex64ServiceGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShNetcorex64ServiceGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64ServiceGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ShService.ApiShNetcorex64ServiceGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiShNetcorex64ServiceGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShNetcorex64ServiceGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.apiShNetcorex64ServiceGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
