import { Component, OnInit } from '@angular/core';
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Post} from "../../models/posts.model";
import {getPosts} from "../state/posts.selectors";
import {deletePost} from "../state/posts.actions";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  deletePost = (postId: number) => {
    this.store.dispatch(deletePost({id: postId}));
  }

}
