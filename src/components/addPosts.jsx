import React, { Component } from "react";
import { FormGroup, FormGroupTextArea } from "./formGroup";
import { connect } from "react-redux";

class AddPost extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <form>
          <FormGroup
            name="username"
            labelText="Your Username"
            inputType="text"
          />
          <FormGroup
            name="postHeader"
            labelText="Header of your post"
            inputType="text"
          />
          <FormGroupTextArea
            name="postContent"
            labelText="Post Content"
            inputType="textarea"
          />
          <button type="submit" className="btn btn-success">
            Add
          </button>
          <button type="submit" className="btn btn-secondary">
            clear
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.crud.posts
  };
}
export default connect(mapStateToProps)(AddPost);
