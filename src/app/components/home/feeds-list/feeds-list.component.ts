import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { PostModel } from '../../../models/post.model';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {
  post: PostModel;

  constructor(http: Http) {
    this.post = new PostModel();
    this.post.title = 'Shabba';
  }

  ngOnInit() {
  }

}
