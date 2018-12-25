import { Component, OnInit } from '@angular/core';
import { PostListsRequestType } from 'src/app/models/enums/PostListsRequestType';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  isSelectionButtonsVisible: boolean;

  isSelectFromComputerTemplateVisible: boolean;

  isSelectFromTemplateVisible: boolean;

  isSelectFromUrlVisible: boolean;

  requestType: PostListsRequestType;

  constructor() {
    this.isSelectionButtonsVisible = true;
  }

  ngOnInit() {
  }

  onSelectFromComputerButtonClicked() {
    this.isSelectionButtonsVisible = false;
    this.isSelectFromComputerTemplateVisible = true;
  }

  onSelectFromTemplatesButtonClicked() {
    this.isSelectionButtonsVisible = false;
    this.isSelectFromTemplateVisible = true;
  }

  onSelectFromUrlButtonClicked() {
    this.isSelectionButtonsVisible = false;
    this.isSelectFromUrlVisible = true;
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
