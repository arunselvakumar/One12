import { PostModel } from './post.model';
import { LinksModel } from './links.model';

export interface PostResponseModel {
  links: LinksModel;
  data: PostModel;
}
