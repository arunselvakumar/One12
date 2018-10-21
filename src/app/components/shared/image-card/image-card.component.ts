import { Component, OnInit, Input } from '@angular/core';

import { PostModel } from '../../../models/post.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input('dataContext') dataContext: PostModel;

  constructor() {
  }

  ngOnInit() {
  }
}
