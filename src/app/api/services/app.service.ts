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
export class AppService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAppGet
   */
  static readonly ApiAppGetPath = '/api/App';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAppGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAppGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AppService.ApiAppGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAppGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAppGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.apiAppGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAppGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAppGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AppService.ApiAppGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAppGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAppGet$Json(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.apiAppGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
