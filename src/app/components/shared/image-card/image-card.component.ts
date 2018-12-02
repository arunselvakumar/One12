import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() postId: string;

  @Input() title: string;

  @Input() imgSrc: string;

  @Input() displayName: string;

  @Input() postedTime: string;

  constructor() {
  }

  ngOnInit() {

  }
}
