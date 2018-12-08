import { Component, OnInit } from '@angular/core';

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

}
