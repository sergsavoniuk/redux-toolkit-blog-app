import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Status, ViewMode } from "app/types";
import { useAppDispatch } from "app/store";

import { Button } from "components/Button";
import { Spinner } from "components/Spinner";

import {
  fetchPosts,
  postLiked,
  selectPosts,
  selectPostsStatus,
} from "features/postsList/postsListSlice";

import { Post } from "./Post";

import classes from "./Post.module.scss";

export const PostsList = () => {
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Object.keys(posts).length < 2) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts]);

  if (status === Status.Loading) {
    return <Spinner />;
  }

  return (
    <div className={classes.postList}>
      <Button className={classes.createPostButton}>
        <Link to="/posts/new">Create Post</Link>
      </Button>
      {Object.keys(posts).map((key) => (
        <Post
          key={key}
          post={posts[key]}
          likePost={() => dispatch(postLiked({ id: key }))}
          mode={ViewMode.List}
        />
      ))}
    </div>
  );
};
