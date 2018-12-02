import { PostModel } from './postModel';
import { LinksModel } from './linksModel';

export class PostResponseModel {
  links: LinksModel;
  data: PostModel;
}
