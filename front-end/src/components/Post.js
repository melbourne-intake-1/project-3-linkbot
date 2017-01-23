import React from 'react';
import { getPosts, getPost, upvote, deletePost } from '../api/apiCall';
import Form from './Form';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Comment from './Comment';
import SinglePost from './SinglePost';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      stuff: 'stuff'
    }
    this.populatePosts = this.populatePosts.bind(this)
    this.upvotePost = this.upvotePost.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  componentDidMount() {
    this.populatePosts()
  }

  upvotePost(post) {
    upvote(post._id)
      .then(response => {
        console.log(response.data)
        this.populatePosts()
      })
  }

  populatePosts() {
    getPosts()
      .then(response => {
        console.log('in pop posts', response.data)
        this.setState({ posts: response.data })
      })
  }

  deletePost(post) {
    deletePost(post._id)
      .then(response => {
        console.log(response.data)
        this.populatePosts()
      })
  }

  render() {
    console.log('this.state.posts', this.state.posts)

    return (
      <div>
        <h3>Posts</h3>
        { this.state.posts.map((post) => {
          return (
            <SinglePost currentPost={post}/>
          )
        }, this)}
        <Form populatePosts={this.populatePosts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default Post;
