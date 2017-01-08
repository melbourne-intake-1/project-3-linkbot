import React from 'react';
import { newPost } from '../api/apiCall'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      url: '',
      titlePreview: 'title preview',
      bodyPreview: 'body preview',
      urlPreview: 'url'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateBody = this.updateBody.bind(this)
    this.updateURL = this.updateURL.bind(this)
  }

  updateTitle(e){
    console.log(e)
    this.setState({titlePreview: e.target.value})
  }

  updateURL(e){
    console.log(e)
    this.setState({urlPreview: e.target.value})
  }

  updateBody(e){
    console.log(e)
    this.setState({bodyPreview: e.target.value})
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
        <p id='preview' >
        <h4>Preview</h4>
        <a href={this.state.urlPreview}>{this.state.titlePreview}</a>
        <p>{this.state.bodyPreview}</p>
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input onKeyUp={this.updateTitle} type="text" ref="title" placeholder="title" />
          </label>
          <label>Body:  
            <input onKeyUpress={this.updateBody} type="text" ref="body" placeholder="body" />
          </label>
          <label>URL:
            <input onKeyUp={this.updateURL}  type="text" ref="url" placeholder="URL" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;