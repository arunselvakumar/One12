import { Component, Input, OnInit } from '@angular/core';
import { PostListsRequestType } from '../../../models/enums/PostListsRequestType';

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.scss']
})
export class TemplatesListComponent implements OnInit {

  requestType: PostListsRequestType;

  constructor() { }

  ngOnInit() {
  }

  onTrendingSelected() {
    this.requestType = PostListsRequestType.Trending;
  }

  onRecommendedSelected() {
    this.requestType = PostListsRequestType.Recommended;
  }

  onFromNetworkSelected() {
    this.requestType = PostListsRequestType.Network;
  }
}
