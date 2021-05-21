import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsState} from "./posts.state";

export const POST_STATE_NAME = 'posts'

const getPostState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPosts, (posts, props) => {
  return posts.filter(post => post.id == props.id)[0];
})

// export const getPostById = createSelector(getPosts, (posts) =>  (id: number)  => posts[id])
