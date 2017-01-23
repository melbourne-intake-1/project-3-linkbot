import React from 'react';
import { getPosts, upvote, deletePost } from '../api/apiCall';
import Form from './Form';
import SinglePost from './SinglePost';
import SearchForm from './SearchForm';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filterText: ''
    }
    this.populatePosts = this.populatePosts.bind(this)
    this.upvotePost = this.upvotePost.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.searchEntry = this.searchEntry.bind(this)
  }

  searchEntry(searchValue){
    console.log(searchValue)
    this.setState({
      filterText: searchValue
    })
  }

  componentDidMount() {
    this.populatePosts()
  }

  upvotePost(post) {
    console.log('In upvotePost', post)
    upvote(post._id)
      .then(response => {
        console.log(response.data)
        this.populatePosts()
      })
    console.log('End of upvote posts')
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
        <h3>FT: {this.state.filterText}</h3>
        <SearchForm searchEntry={this.searchEntry} />
        { this.state.posts.map((post) => {
          if (post.body.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1 ){
          } else {
            return (
              <SinglePost currentPost={post} deletePost={this.deletePost} upvotePost={this.upvotePost} />
            )
          }
          
        }, this)}
        <Form populatePosts={this.populatePosts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default Post;
