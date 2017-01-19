import React from 'react'
// import { getPosts, getPost, upvote, deletePost } from '../api/apiCall'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   comments: [],
    // }
    //this.populateComments = this.populatePosts.bind(this)
    // this.deletePost = this.deletePost.bind(this)
  }

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
