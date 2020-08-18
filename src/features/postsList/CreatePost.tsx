import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { useAppDispatch } from "app/store";

import {
  createPost,
  selectPostsStatus,
} from "features/postsList/postsListSlice";

import { TextInput, TextArea } from "components/Input";
import { Button } from "components/Button";

import classes from "./Post.module.scss";
import { Status } from "app/types";

export const CreatePost = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPostStatus = useSelector(selectPostsStatus);

  const dispatch = useAppDispatch();

  const handleCreateArticle = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(createPost({ title, body })).then(() => {
      setTitle("");
      setBody("");
      history.push("/posts");
    });
  };

  return (
    <form className={classes.createPost} onSubmit={handleCreateArticle}>
      <TextInput
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter article title"
      />
      <TextArea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        rows={17}
        placeholder="Enter article content"
      />
      <Button type="submit" disabled={createPostStatus === Status.Loading}>
        {createPostStatus === Status.Loading
          ? "Creating ..."
          : "Create Article"}
      </Button>
    </form>
  );
};
