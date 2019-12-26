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
        <Route path="/crud-react/posts" component={Container} />
        <Route path="/crud-react/add" component={AddPost} />
        <Route path="/crud-react/post/edit/:id" component={EditPost} />
        <Route path="/crud-react/" exact component={Container} />
        <Redirect to="/crud-react/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
