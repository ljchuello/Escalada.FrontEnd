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
export class UsuarioService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsuarioGet
   */
  static readonly ApiUsuarioGetPath = '/api/Usuario';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioService.ApiUsuarioGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUsuarioGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.apiUsuarioGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioService.ApiUsuarioGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUsuarioGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.apiUsuarioGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiUsuarioPost
   */
  static readonly ApiUsuarioPostPath = '/api/Usuario';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioPost$Response(params?: {
    body?: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioService.ApiUsuarioPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioPost(params?: {
    body?: string
  },
  context?: HttpContext

): Observable<void> {

    return this.apiUsuarioPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUsuarioIdGet
   */
  static readonly ApiUsuarioIdGetPath = '/api/Usuario/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioService.ApiUsuarioIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUsuarioIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.apiUsuarioIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioService.ApiUsuarioIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUsuarioIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.apiUsuarioIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiUsuarioIdPut
   */
  static readonly ApiUsuarioIdPutPath = '/api/Usuario/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioIdPut$Response(params: {
    id: number;
    body?: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioService.ApiUsuarioIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioIdPut(params: {
    id: number;
    body?: string
  },
  context?: HttpContext

): Observable<void> {

    return this.apiUsuarioIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUsuarioIdDelete
   */
  static readonly ApiUsuarioIdDeletePath = '/api/Usuario/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsuarioService.ApiUsuarioIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiUsuarioIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
