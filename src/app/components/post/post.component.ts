import { Component, OnInit } from '@angular/core';
import { PostResponseModel } from '../../models/postResponseModel';
import { PostService } from '../../services/api-services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: PostResponseModel;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
        .subscribe(params => {
          const postId = params.get('id');

          this.postService.getPostById(postId).subscribe( data => {
            this.post = data;
            console.log(this.post);
          });
        });
  }

}
