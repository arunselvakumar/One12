import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../../models/post.model';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {
  post: PostModel;

  constructor() {
    this.post = new PostModel();
    this.post.title = 'Shabba';
  }

  ngOnInit() {
  }

}
