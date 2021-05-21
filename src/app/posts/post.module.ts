import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./post-list/post-list.component";
import {CreatePostComponent} from "./create-post/create-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {postsReducer} from "./state/posts.reducer";
import {POST_STATE_NAME} from "./state/posts.selectors";

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      {path: 'create', component: CreatePostComponent},
      {path: 'edit/:id', component: EditPostComponent}
    ],
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME, postsReducer)
  ],
  declarations: [
    PostListComponent,
    CreatePostComponent,
    EditPostComponent
  ],
})

export class PostModule {

}
