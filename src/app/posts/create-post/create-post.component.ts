import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/posts.model";
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";
import {addPost} from "../state/posts.actions";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  // @ts-ignore
  postForm : FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(null,[
          Validators.required,
          Validators.minLength(10)
        ])
    })
  }

  onAddPost(){
    console.log(this.postForm);
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }

    this.store.dispatch(addPost({post}))
  }

}
