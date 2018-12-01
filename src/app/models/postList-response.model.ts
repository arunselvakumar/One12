import { LinksModel } from './links.model';
import { PostResponseModel } from './post-response.model';

export class PostListResponseModel {
  links: LinksModel;
  data: PostResponseModel[];
}
