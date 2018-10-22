import { LinksModel } from './links.model';
import { PostModel } from './post.model';

export class PostListResponseModel {
  links: LinksModel;
  data: PostModel[];
}
