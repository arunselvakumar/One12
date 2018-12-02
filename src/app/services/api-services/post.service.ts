import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListResponseModel } from '../../models/postListResponseModel';
import { ApiConfig } from '../../utils/api.config.util';
import { HttpClient } from '@angular/common/http';
import { GetPostsRequestModel } from '../../models/request-models/post/GetPostsRequestModel';
import { PostResponseModel } from '../../models/postResponseModel';

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

  getPostById(postId: string): Observable<PostResponseModel> {

    const url = ApiConfig.API_DEFAULT_URL + 'api/post/' + postId;

    return this.httpClient.get<PostResponseModel>(url, this.headers);
  }
}
