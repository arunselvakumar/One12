import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListResponseModel } from '../../models/postList-response.model';
import { ApiConfig } from '../../utils/api.config.util';
import { HttpClient } from '@angular/common/http';
import { GetPostsRequestModel } from '../../models/request-models/post/GetPostsRequestModel';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiConfig {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getPosts(request: GetPostsRequestModel): Observable<PostListResponseModel> {
    const url = ApiConfig.API_DEFAULT_URL + 'api/post';

    return this.httpClient.get<PostListResponseModel>(url, this.headers);
  }
}
