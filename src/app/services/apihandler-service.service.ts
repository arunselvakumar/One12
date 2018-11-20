import {Injectable} from '@angular/core';
import {ApiConfig} from '../utils/api.config.util';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIHandlerServiceService extends ApiConfig {

  constructor(private http: HttpClient) {
    // ToDo: Update User Services & Call the base class
    // https://github.com/imusify/frontend/blob/master/src/app/services/api-handler.service.ts
    super();
  }

  public callService(method: string = 'POST', path: string = '', data?: string | Object): Observable<any> {
    this.headers = {headers: this.setHeaders()};
    method = method.toUpperCase();
    let url = `${APIHandlerServiceService.API_DEFAULT_URL}${path}`;
    if (data === undefined || data === null) {
      data = ' ';
    }
    switch (method) {
      case 'POST':
        return this.http.post(url, (data || {}), this.headers)
          .catch(this.errorHandler)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .map((res: HttpResponse<any>) => res);
      case 'PUT':
        return this.http.put(url, (data || {}) || {}, this.headers)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .catch(this.errorHandler)
          .map((res: HttpResponse<any>) => res);
      case 'GET':
        url = this.checkGetMark(url);
        return this.http.get(`${url}`, this.headers)
          .catch(this.errorHandler)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .map((res: HttpResponse<any>) => res);
      case 'DELETE':
        url = this.checkGetMark(url);
        return this.http.delete(`${url}`, this.headers)
          .retryWhen((errors) => {
            return errors
              .mergeMap((error) => this.errorHandler(error))
              .delay(1000)
              .take(2);
          })
          .catch(this.errorHandler)
          .map((res: HttpResponse<any>) => res);
      default:
        throw new Error('Request Method does not exist');
    }

  }

  private errorHandler(err: HttpResponse<any>) {
    let bodyError = null;
    if (err.status === 401) {
      if (err['_body'] && err['_body'].constructor === String) {
        bodyError = (err['_body'].indexOf('{') > -1) ? JSON.parse(err['_body'])['message'] : null;
      }
      throw (err || 'Server error');
    } else if (err.status === 404) {
      throw (err.statusText || 'Resource not found');
    }
    return Observable.throw(err || 'Server error');
  }
}
