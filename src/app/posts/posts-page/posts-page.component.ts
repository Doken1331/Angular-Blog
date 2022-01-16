import { Component, NgModule, OnInit } from '@angular/core';
import { PostService } from 'src/app/post-service';


@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostService]
})


export class PostsPageComponent implements OnInit {

  posts: Array<{ id: number, name: string, url: string, desc: string}> = [];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.posts = this.service.posts;
  }

}


