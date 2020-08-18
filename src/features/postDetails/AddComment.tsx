import React, { useState } from "react";

import { TextArea } from "components/Input";
import { Button } from "components/Button";

import classes from "./PostDetails.module.scss";

type Props = {
  addComment: (text: string) => void;
};

export const AddComment: React.FC<Props> = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleAddComment = () => {
    addComment(text);
    setText("");
  };

  return (
    <div className={classes.addComment}>
      <TextArea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter your comment ..."
      />
      <Button onClick={handleAddComment}>Comment</Button>
    </div>
  );
};
