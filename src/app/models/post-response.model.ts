import { PostModel } from './post.model';
import { LinksModel } from './links.model';

export class PostResponseModel {
  links: LinksModel;
  data: PostModel;
}
