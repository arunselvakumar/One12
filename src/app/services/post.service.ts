import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostListResponseModel } from '../models/postList-response.model';
import { ApiConfig } from '../utils/api.config.util';
import {PostResponseModel} from '../models/post-response.model';

@Injectable({
  providedIn: 'root'
})
export class FeedsListService {

  constructor(private httpClient: HttpClient ) {
  }

  getPosts(): Observable<PostListResponseModel> {
    const url = ApiConfig.API_DEFAULT_URL + 'api/post';
    return this.httpClient.get<PostListResponseModel>(url);
  }

  getPostById(id: string): Observable<PostResponseModel> {
    const url = ApiConfig.API_DEFAULT_URL + 'api/post' + id;
    return this.httpClient.get<PostResponseModel>(url);
  }
}
