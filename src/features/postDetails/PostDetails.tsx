import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Status, ViewMode } from "app/types";
import { useAppDispatch } from "app/store";

import { Post } from "features/postsList/Post";
import { Comments } from "features/postDetails/Comments";
import { AddComment } from "features/postDetails/AddComment";

import { selectPosts, postLiked } from "features/postsList/postsListSlice";
import {
  fetchPostDetails,
  selectCommentsStatus,
  selectComments,
  commentAdded,
} from "features/postDetails/postDetailsSlice";

import { Spinner } from "components/Spinner";

import classes from "./PostDetails.module.scss";

export const PostDetails = () => {
  const { id: postId } = useParams();

  const comments = useSelector(selectComments)[postId];
  const status = useSelector(selectCommentsStatus);
  const post = useSelector(selectPosts)[postId];

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!post?.body || !comments) {
      dispatch(fetchPostDetails(postId));
    }
  }, [dispatch, postId, post, comments]);

  if (!post?.body || status === Status.Loading) {
    return <Spinner />;
  }

  return (
    <div className={classes.postDetails}>
      <Post
        post={post}
        likePost={() => dispatch(postLiked({ id: postId }))}
        mode={ViewMode.Post}
      />
      <div className={classes.comment}>
        <h3>Comments:</h3>
        <AddComment
          addComment={(text: string) =>
            dispatch(commentAdded({ postId, text }))
          }
        />
        <Comments comments={comments} />
      </div>
    </div>
  );
};
