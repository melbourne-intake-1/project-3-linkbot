import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost';
import { getPost } from './api/apiCall';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      error: null
    }
  }

  componentDidMount() {
    console.log("running")
    const postId = this.props.params.postId
    getPost(postId)
    .then(response => {
      console.log('in pop posts', response.data)
      this.setState({ post: response.data, error: null })
    })
    .catch((error) => {
      console.error('loading post', error)
      this.setState({ error: error })
    })
  }

  render() {
    const { post, error } = this.state
    return (
          <div className="App">
            <Header />
            {
              (error != null) ? (
                error.message
              ) : (post == null) ? (
                'Loading…'
              ) : (
                <SinglePost currentPost={ post } />
              )
            }
            <Footer />
          </div>
    );
  }
}
