import React, { Component } from "react";
import { FormGroup, FormGroupTextArea } from "./formGroup";
import { connect } from "react-redux";
import { UPDATEPOST } from "../actions/actions";

class EditPost extends Component {
  updatePost = PostId => {};
  render() {
    var getId = this.props.match.params.id;
    var getPost = this.props.posts.find(c => c.id == getId);
    return (
      <div className="container">
        <br />
        <br />
        <form>
          <FormGroup
            name="username"
            labelText="Your Username"
            inputType="text"
            value={getPost.name}
          />
          <FormGroup
            name="postHeader"
            labelText="Header of your post"
            inputType="text"
            value={getPost.postHeader}
          />
          <FormGroupTextArea
            name="postContent"
            labelText="Post Content"
            inputType="textarea"
            value={getPost.post}
          />
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.updatePost(getPost.id)}
          >
            Update
          </button>
          <button type="submit" className="btn btn-secondary">
            reset
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
export default connect(mapStateToProps)(EditPost);
