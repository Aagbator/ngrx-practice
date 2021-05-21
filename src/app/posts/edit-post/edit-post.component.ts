import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {getPostById} from "../state/posts.selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {map} from "rxjs/operators";
import {Post} from "../../models/posts.model";
import {Observable, Subscription} from "rxjs";
import {updatePost} from "../state/posts.actions";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm: FormGroup;
  singlePost: Post;
  postSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState> , private router: Router) { }

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
    });

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.postSubscription = this.store.select(getPostById, {id}).subscribe(data => {
        this.singlePost = data;
        this.createForm();
      })
    })
  }

  createForm = () => {
    this.postForm.patchValue({
      title: this.singlePost.title,
      description: this.singlePost.description
    })
  }

  onUpdatePost(){
    const { title, description} = this.postForm.value
    const post = {id: this.singlePost.id, title, description};
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts'])
  }

  ngOnDestroy(){
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

}
