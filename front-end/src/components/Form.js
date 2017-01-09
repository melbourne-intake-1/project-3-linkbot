import React from 'react';
import PostPreview from './PostPreview'
import FormFields from './FormFields'
import { newPost } from '../api/apiCall'


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      url: '',
      titlePreview: 'Title Preview',
      bodyPreview: 'Body Preview',
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
    const boo = 'titlePreview'
    this.refs.title.value = '';
    this.refs.body.value = '';
    this.refs.url.value = '';
    this.setState({
      urlPreview: '',
      titlePreview: 'Title Preview',
      bodyPreview: 'Body Preview'
    })
  }

  render() {
    return (
      <div>
        <PostPreview title={this.state.titlePreview} body={this.state.bodyPreview} url={this.state.urlPreview} />
        <FormFields updateTitle={this.updateTitle} updateBody={this.updateBody} updateURL={this.updateURL} />
      </div>
    );
  }
}

export default Form;