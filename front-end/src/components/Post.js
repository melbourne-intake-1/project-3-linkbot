import React from 'react'
import { getPosts, getPost, upvote, deletePost } from '../api/apiCall'
import Form from './Form'

class Post extends React.Component {
  constructor(props) {
    super(props)
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
    return (
      <div>
        { this.state.posts.map((post) => {
          return (
            <div key={post._id} className="post">
              <p><a href={post.url}> {post.title}</a></p>
              <p>{post.body}</p>
              <p>votes: {post.votes} <button onClick={() => this.upvotePost(post)}>Upvote</button></p>
              <p><a href="#" onClick={() => this.deletePost(post)}>Delete Post</a></p>
              <hr/>
            </div>
          )
        })}
        <Form populatePosts={this.populatePosts} />       
      </div>  
    );
  }
}

export default Post;