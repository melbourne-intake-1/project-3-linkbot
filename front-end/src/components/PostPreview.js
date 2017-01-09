import React from 'react';

class PostPreview extends React.Component {
  render() {
    return (
      <div id="preview" >
        <h3>Post Preview</h3>
        <strong><a href={this.props.url}>{this.props.title}</a></strong>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default PostPreview;
