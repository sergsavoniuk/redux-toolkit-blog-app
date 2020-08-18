import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";

import { ApiService } from "api/api";
import { Posts, Post, CreatePostPayload } from "api/types";

import { Status } from "app/types";
import { RootState } from "app/rootReducer";
import { commentAdded } from "features/postDetails/postDetailsSlice";

export const fetchPosts = createAsyncThunk<
  Posts,
  undefined,
  { extra: ApiService }
>("posts/fetchPosts", async (_, { extra: Api }) => {
  const data = await Api.fetchPosts();
  return data as Posts;
});

export const createPost = createAsyncThunk<
  Post,
  CreatePostPayload,
  { extra: ApiService }
>("posts/createPost", async ({ title, body }, { extra: Api }) => {
  const post = await Api.createPost({ title, body });
  return post;
});

export const postReceived = createAction<{ postId: string; post: Post }>(
  "post/postReceived"
);

type PostsState = {
  data: Posts;
  status: Status;
  error: {} | null;
};

const initialState: PostsState = {
  data: {},
  status: Status.Idle,
  error: null,
};

const postsListSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postLiked: (state, action) => {
      state.data[action.payload.id].likes++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = Status.Resolved;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = Status.Rejected;
      })
      .addCase(createPost.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.data[action.payload.id] = action.payload;
        state.status = Status.Resolved;
      })
      .addCase(createPost.rejected, (state) => {
        state.status = Status.Rejected;
      })
      .addCase(postReceived, (state, action) => {
        const { postId, post } = action.payload;
        state.data[postId] = post;
      })
      .addCase(commentAdded, (state, action) => {
        const { postId, comment } = action.payload;
        state.data[postId].comments?.push(comment.id);
      });
  },
});

export const selectPosts = (state: RootState) => state.posts.data;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;

const { actions, reducer } = postsListSlice;

const { postLiked } = actions;

export { reducer as postsListReducer, postLiked };
