import { LinksModel } from './linksModel';
import { PostResponseModel } from './postResponseModel';

export class PostListResponseModel {
  links: LinksModel;
  data: PostResponseModel[];
}
