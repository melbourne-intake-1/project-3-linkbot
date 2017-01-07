import React from 'react'
import apiCall from '../api/apiCall'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      stuff: 'stuff'
    }
    this.populatePosts = this.populatePosts.bind(this)
  }

  componentDidMount() {
    this.populatePosts()
  }


  populatePosts() {
    apiCall()
      .then(response => {
        console.log(response.data)
        this.setState({ posts: response.data })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.populatePosts}>TEST</button>
        { this.state.posts.map(function(post) {
          return (
            <div key={post.id} className="post">
              <p><a href={post.url}> {post.title}</a></p>
              <p>{post.body}</p>
              <p>votes: {post.votes} </p>
            </div>
          )
        })}
        <p>stuff: {this.state.stuff} </p>
      </div>  
    );
  }
}

export default Post;