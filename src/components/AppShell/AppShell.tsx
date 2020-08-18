import React from "react";

import { Header } from "components/Header";

import classes from "./AppShell.module.scss";

export const AppShell: React.FC = ({ children }) => (
  <div className={classes.appShell}>
    <Header />
    <div className={classes.appShellContent}>{children}</div>
  </div>
);
