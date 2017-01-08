import React from 'react'
import { getPosts, getPost, upvote } from '../api/apiCall'
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

  render() {
    return (
      <div>
        <button onClick={this.populatePosts}>TEST</button>
        { this.state.posts.map((post) => {
          return (
            <div key={post._id} className="post">
              <p><a href={post.url}> {post.title}</a></p>
              <p>{post.body}</p>
              <p>votes: {post.votes} <button onClick={() => this.upvotePost(post)}>Button</button></p>
            </div>
          )
        })}
        <Form populatePosts={this.populatePosts} />
      </div>  
    );
  }
}

export default Post;