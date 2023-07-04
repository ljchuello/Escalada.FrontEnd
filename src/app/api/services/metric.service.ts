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

import { OMetrica } from '../models/o-metrica';

@Injectable({ providedIn: 'root' })
export class MetricService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMetricPost()` */
  static readonly ApiMetricPostPath = '/api/Metric';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMetricPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetricPost$Plain$Response(
    params?: {
      body?: OMetrica
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<OMetrica>> {
    const rb = new RequestBuilder(this.rootUrl, MetricService.ApiMetricPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OMetrica>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMetricPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetricPost$Plain(
    params?: {
      body?: OMetrica
    },
    context?: HttpContext
  ): Observable<OMetrica> {
    return this.apiMetricPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OMetrica>): OMetrica => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMetricPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetricPost$Json$Response(
    params?: {
      body?: OMetrica
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<OMetrica>> {
    const rb = new RequestBuilder(this.rootUrl, MetricService.ApiMetricPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OMetrica>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMetricPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMetricPost$Json(
    params?: {
      body?: OMetrica
    },
    context?: HttpContext
  ): Observable<OMetrica> {
    return this.apiMetricPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OMetrica>): OMetrica => r.body)
    );
  }

}
