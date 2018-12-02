import { CommentsListModel } from './comments-list.model';

export class PostModel {
  id: string;
  title: string;
  type: string;
  content: string;
  category: string;
  comment: CommentsListModel;
  tags: string[];
  searchTags: string[];
  isAnonymous: boolean;
  createdBy: string;
  createdOn: string;
}
