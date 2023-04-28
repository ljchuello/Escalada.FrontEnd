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

import { OAuth } from '../models/o-auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuthTokenGet
   */
  static readonly ApiAuthTokenGetPath = '/api/Auth/{token}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthTokenGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Plain$Response(params: {
    token: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OAuth>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthTokenGetPath, 'get');
    if (params) {
      rb.path('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OAuth>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthTokenGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Plain(params: {
    token: string;
  },
  context?: HttpContext

): Observable<OAuth> {

    return this.apiAuthTokenGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<OAuth>) => r.body as OAuth)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthTokenGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Json$Response(params: {
    token: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OAuth>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthTokenGetPath, 'get');
    if (params) {
      rb.path('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OAuth>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthTokenGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Json(params: {
    token: string;
  },
  context?: HttpContext

): Observable<OAuth> {

    return this.apiAuthTokenGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<OAuth>) => r.body as OAuth)
    );
  }

  /**
   * Path part for operation apiAuthPost
   */
  static readonly ApiAuthPostPath = '/api/Auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Plain$Response(params?: {
    body?: OAuth
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OAuth>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OAuth>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Plain(params?: {
    body?: OAuth
  },
  context?: HttpContext

): Observable<OAuth> {

    return this.apiAuthPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<OAuth>) => r.body as OAuth)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Json$Response(params?: {
    body?: OAuth
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OAuth>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OAuth>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthPost$Json(params?: {
    body?: OAuth
  },
  context?: HttpContext

): Observable<OAuth> {

    return this.apiAuthPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<OAuth>) => r.body as OAuth)
    );
  }

}
