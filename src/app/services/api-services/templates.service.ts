import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConfig} from '../../utils/api.config.util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService extends ApiConfig {

  constructor(private  httpClient: HttpClient) {
    super();
  }

  getTemplates(request: any): Observable<any> {

    const  url = ApiConfig.API_DEFAULT_URL + 'api/post';

    return this.httpClient.get<any>(url, this.headers);
  }

}
