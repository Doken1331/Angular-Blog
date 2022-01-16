import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PostComponent } from './posts/post/post.component';
import { PostsPageComponent } from './posts/posts-page/posts-page.component';
import { TagsComponent } from './tags/tags.component';
import { YourInfoComponent } from './your-info/your-info.component';


const routes: Routes = [
  {path: 'tags', component: TagsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'your-info', component: YourInfoComponent},
  {path: '', component: PostsPageComponent},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  declarations: [
    PostsPageComponent,
    PostComponent,
    TagsComponent,
    AuthorComponent
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
