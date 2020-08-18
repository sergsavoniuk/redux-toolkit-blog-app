import React from "react";
import { Link } from "react-router-dom";

import { Button } from "components/Button";

import classes from "./LandingPage.module.scss";

export const LandingPage = () => (
  <div className={classes.landingPage}>
    <h1>@reduxjs/toolkit demo application</h1>
    <Button>
      <Link to="/posts">&#8594;</Link>
    </Button>
  </div>
);
