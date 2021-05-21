import {initialState, PostsState} from "./posts.state";
import {Action, createReducer, on} from "@ngrx/store";
import {addPost, deletePost, updatePost} from "./posts.actions";

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = {...action.post};
    post.id = state.posts.length + 1
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }),
  on(updatePost, (state, action) => {
    let updatedPosts = state.posts.map(post => {
      return post.id == action.post.id ? action.post : post
    });
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  on(deletePost, (state, action) => {
    console.log('>>', action.id);
    let updatedPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: updatedPosts
    }
  }),
  );

export function postsReducer(state: PostsState | undefined, action: Action) {
  return _postReducer(state, action);
}
