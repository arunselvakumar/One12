import { LinksModel } from './links.model';
import { CommentModel } from './comment.model';

export class CommentsListModel {
  links: LinksModel;
  data: CommentModel[];
}
