import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

import { Post as PostType } from "api/types";
import { ViewMode } from "app/types";

import { Button } from "components/Button";

import classes from "./Post.module.scss";

type Props = {
  post: PostType;
  likePost: (postId: string) => void;
  mode: ViewMode;
};

export const Post: React.FC<Props> = ({
  post: { id, title, author, createdAt, likes, body },
  likePost,
  mode,
}) => (
  <section className={classes.postItem}>
    <div>
      <img src={author.avatar} alt="User avatar" />
    </div>
    <div>
      <div>
        <span className={classes.postItemAuthor}>@{author.name}</span>
        <span>
          {" "}
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>
      <div className={classes.postItemTitle}>
        {mode === ViewMode.Post ? (
          <p>{title}</p>
        ) : (
          <Link to={`/posts/${id}`}>{title}</Link>
        )}

        {mode === ViewMode.Post && <p>{body}</p>}
      </div>
      <div className={classes.postItemMeta}>
        <Button onClick={() => likePost(id)}>
          <span role="img" aria-label="Like icon">
            ❤️
          </span>
        </Button>
        <span>{likes > 0 ? likes : ""}</span>
      </div>
    </div>
  </section>
);
