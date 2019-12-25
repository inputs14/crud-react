import React from "react";
import Navbar from "./components/navbar";
import Container from "./components/container";
import EditPost from "./components/editPosts";
import AddPost from "./components/addPosts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/posts" component={Container} />
        <Route path="/add" component={AddPost} />
        <Route path="/post/edit/:id" component={EditPost} />
        <Route path="/" exact component={Container} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
