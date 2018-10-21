import { LinksModel } from './links.model';
import { CommentModel } from './comment.model';

export interface CommentsListModel {
  links: LinksModel;
  data: CommentModel[];
}
