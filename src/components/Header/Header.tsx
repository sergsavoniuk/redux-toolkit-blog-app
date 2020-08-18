import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";

export const Header = () => (
  <header className={classes.header}>
    <h1>
      <Link to="/">@reduxjs toolkit</Link>
    </h1>
  </header>
);
