import React from "react";
import cn from "classnames";

import classes from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ className, ...props }) => (
  <button {...props} className={cn(classes.button, className)} />
);
