import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  nanoid,
} from "@reduxjs/toolkit";

import { getRandomAuthor } from "utils";

import { Comments, Comment, Post } from "api/types";
import { ApiService } from "api/api";
import { postsList } from "api/data";

import { Status } from "app/types";
import { AppDispatch } from "app/store";

import { postReceived, selectPosts } from "features/postsList/postsListSlice";
import { RootState } from "app/rootReducer";

export const fetchPostDetails = createAsyncThunk<
  { postId: string; comments: Comment[] },
  string,
  { dispatch: AppDispatch; state: RootState; extra: ApiService }
>(
  "postDetails/fetchPostDetails",
  async (postId, { dispatch, getState, extra: Api }) => {
    const posts = selectPosts(getState());

    // Note: Retrieve newly created posts from Redux store
    const [post, comments] = await Promise.all<Post, Comment[]>([
      Object.prototype.hasOwnProperty.call(postsList, postId)
        ? Api.fetchPost(postId)
        : posts[postId],
      Api.fetchCommentsByPostId(postId),
    ]);

    dispatch(postReceived({ postId, post }));

    return { postId, comments };
  }
);

type CommentsState = {
  data: Comments;
  status: Status;
  error: {} | null;
};

const initialState: CommentsState = {
  data: {} as Comments,
  status: Status.Idle,
  error: null,
};

export const postDetailsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentAdded: {
      reducer: (
        state,
        action: PayloadAction<{ postId: string; comment: Comment }>
      ) => {
        const { postId, comment } = action.payload;
        state.data[postId].unshift(comment);
      },
      prepare({ postId, text }: { postId: string; text: string }) {
        return {
          payload: {
            postId,
            comment: {
              postId,
              id: nanoid(),
              text,
              createdAt: new Date().toISOString(),
              author: getRandomAuthor(),
            },
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostDetails.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        state.status = Status.Resolved;
        state.data[postId] = comments;
        state.error = null;
      })
      .addCase(fetchPostDetails.rejected, (state) => {
        state.status = Status.Rejected;
      });
  },
});

const { commentAdded } = postDetailsSlice.actions;
const { reducer } = postDetailsSlice;

export const selectComments = (state: RootState) => state.comments.data;
export const selectCommentsStatus = (state: RootState) => state.comments.status;
export const selectCommentsError = (state: RootState) => state.comments.error;

export { reducer as postDetailsReducer, commentAdded };
