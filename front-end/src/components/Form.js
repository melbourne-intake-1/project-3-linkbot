import React from 'react';
import { newPost } from '../api/apiCall'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      url: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    var popPosts = this.props.populatePosts
    console.log(this.refs.body.value)
    newPost(this.refs.body.value, this.refs.title.value, this.refs.url.value)
      .then(function(response) {
        popPosts()
      })  
    this.cleanFields();
  }

  cleanFields() {
    this.refs.title.value = '';
    this.refs.body.value = '';
    this.refs.url.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" ref="title" placeholder="title" />
          </label>
          <label>Body:  
            <input type="text" ref="body" placeholder="body" />
          </label>
          <label>URL:
            <input type="text" ref="url" placeholder="URL" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;