import {Post} from "../../models/posts.model";

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: 1, title: 'Ghana post', description : 'this is a description'},
    { id: 2, title: 'Nigeria post', description : 'this is a description'},
    { id: 3, title: 'United Kingdom post', description : 'this is a description'}
  ]
}
