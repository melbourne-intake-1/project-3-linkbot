import React from 'react'
// import { getPosts, getPost, upvote, deletePost } from '../api/apiCall'

class Comment extends React.Component {

  render() {
    return (
      <div>
        {this.props.commentContent}
        {this.props.commentID}
      </div>
    );
  }
}

export default Comment;
