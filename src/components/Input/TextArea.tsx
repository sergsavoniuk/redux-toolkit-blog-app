import React from "react";
import cn from "classnames";

import classes from "./TextInput.module.scss";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.FC<Props> = ({ className, ...props }) => (
  <textarea rows={3} {...props} className={cn(classes.textInput, className)} />
);
