import React, { Component } from "react";
import Post from "./post";
import { connect } from "react-redux";
import { DEL_POST, LIKE_CHANGE, DISLIKE_CHANGE } from "../actions/actions";

class Posts extends Component {
  deletePost = postId => {
    this.props.dispatch({
      type: DEL_POST,
      payload: { postId }
    });
  };

  handleLike = (post, value) => {
    this.props.dispatch({
      type: LIKE_CHANGE,
      payload: { post, value }
    });
  };

  handleDislike = (post, value) => {
    this.props.dispatch({
      type: DISLIKE_CHANGE,
      payload: { post, value }
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        {this.props.posts.map(p => (
          <Post
            key={p.id}
            post={p}
            onDelete={() => this.deletePost(p.id)}
            onLike={value => this.handleLike(p, value)}
            onDislike={value => this.handleDislike(p, value)}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.crud.posts
  };
}
export default connect(mapStateToProps)(Posts);
