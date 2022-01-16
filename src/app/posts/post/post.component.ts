import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  index: number = 0;
  thisDataPost: any = 0;
  posts: Array<{ id: number, name: string, url: string, desc: string}> = [];

  constructor(private route: ActivatedRoute, private service: PostService) {

  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.posts = this.service.posts;
    this.thisDataPost = this.service.posts.filter(post => {
      return post.id == this.index;
    })
  }

}
