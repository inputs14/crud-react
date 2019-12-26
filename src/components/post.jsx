import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

class Post extends Component {
  liked = 0;
  disliked = 0;
  displayTime = post => {
    if (post.updatedTime === "") {
      return "Posted at " + post.postedTime;
    } else {
      return "Updated at " + post.updatedTime;
    }
  };

  goDislike = () => {
    if (this.disliked === 0) {
      this.disliked = 1;
      this.props.onDislike(1);
      if (this.liked) {
        this.liked = 0;
        this.props.onLike(-1);
      }
    } else {
      this.disliked = 0;
      this.props.onDislike(-1);
    }
  };

  goLike = () => {
    if (this.liked === 0) {
      this.liked = 1;
      this.props.onLike(1);
      if (this.disliked) {
        this.disliked = 0;
        this.props.onDislike(-1);
      }
    } else {
      this.liked = 0;
      this.props.onLike(-1);
    }
  };

  render() {
    const { post } = this.props;
    return (
      <div className="col-lg-8">
        <div className="card border-primary mb-3">
          <div className="card-header text-center">
            {post.name} - {this.displayTime(post)}
          </div>
          <div className="card-body text-primary">
            <h5 className="card-title">{post.postHeader}</h5>
            <p className="card-text">{post.post}</p>
          </div>
          <div className="card-footer bg-transparent border-primary text-left">
            <button
              type="button"
              onClick={this.goLike}
              className="btn btn-success"
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              &nbsp;{post.likes}
            </button>
            <button
              type="button"
              onClick={this.goDislike}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon={faThumbsDown} />
              &nbsp;{post.dislikes}
            </button>
            <div className="float-right">
              <Link to={"/crud-react/post/edit/" + post.id}>
                <button type="button" className="btn btn-info">
                  Edit
                </button>
              </Link>
              <button
                type="button"
                onClick={this.props.onDelete}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
