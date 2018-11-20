import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.paramMap
      .subscribe(params => {
        const filter = params.get('filter');
        console.log(filter);
      });

  }
}
