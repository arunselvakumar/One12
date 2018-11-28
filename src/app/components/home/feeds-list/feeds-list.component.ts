import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/api-services/post.service';
import {GetPostsRequestModel} from '../../../models/request-models/post/GetPostsRequestModel';
import {PostModel} from '../../../models/post.model';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {
  postsList: PostModel[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    const requestModel = new GetPostsRequestModel();
    requestModel.page = 'recommended';

    this.postService.getPosts(requestModel).subscribe(data => {
      this.postsList = data.data;
      console.log(this.postsList);
    });
  }
}
