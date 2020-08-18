import React from "react";
import { formatDistanceToNow } from "date-fns";

import { Comment } from "api/types";

import postClasses from "features/postsList/Post.module.scss";

import classes from "./PostDetails.module.scss";

type Props = {
  comments: Comment[];
};

export const Comments: React.FC<Props> = ({ comments }) => (
  <div>
    {comments?.map(({ id, author, createdAt, text }) => (
      <section key={id} className={postClasses.postItem}>
        <div>
          <img src={author.avatar} alt="User avatar" />
        </div>
        <div>
          <div>
            <span className={postClasses.postItemAuthor}>@{author.name}</span>
            <span>
              {" "}
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
          <div className={classes.postItemTitle}>
            <p>{text}</p>
          </div>
        </div>
      </section>
    ))}
  </div>
);
