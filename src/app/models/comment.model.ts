export class CommentModel {
  id: string;
  postId: string;
  parentId: string;
  comment: string;
  descendants: string;
  commentedBy: string;
  createdOn: string;
}
