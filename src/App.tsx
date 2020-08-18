import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PostsList } from "features/postsList/PostsList";
import { CreatePost } from "features/postsList/CreatePost";
import { PostDetails } from "features/postDetails/PostDetails";

import { LandingPage } from "components/LandingPage";
import { AppShell } from "components/AppShell";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/posts/new"
          render={() => <AppShell children={<CreatePost />} />}
        />
        <Route
          exact
          path="/posts/:id"
          render={() => <AppShell children={<PostDetails />} />}
        />
        <Route
          path="/posts"
          render={() => <AppShell children={<PostsList />} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
