import { combineReducers } from "@reduxjs/toolkit";

import { postsListReducer } from "features/postsList/postsListSlice";
import { postDetailsReducer } from "features/postDetails/postDetailsSlice";

const rootReducer = combineReducers({
  posts: postsListReducer,
  comments: postDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
