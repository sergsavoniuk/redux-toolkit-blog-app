import React from "react";
import cn from "classnames";

import classes from "./TextInput.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput: React.FC<Props> = ({ className, ...props }) => (
  <input {...props} className={cn(classes.textInput, className)} />
);
