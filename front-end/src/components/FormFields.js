import React from 'react';

class FormFields extends React.Component {
  constructor() {
    super()
    this.cleanFields = this.cleanFieldsAndSubmit.bind(this)
  }
  
  cleanFieldsAndSubmit(body, title, url) {
    //how do i pass action and prevent default
    console.log(this)
    this.props.handleSubmit(body, title, url)
    this.refs.title.value = '';
    this.refs.body.value = '';
    this.refs.url.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={() => this.cleanFieldsAndSubmit(this.refs.body.value, this.refs.title.value, this.refs.url.value )}>
          <label>Title:
            <input onKeyUp={this.props.updateTitle} type="text" ref="title" placeholder="title" />
          </label>
          <label>Body:  
            <input onKeyUp={this.props.updateBody} type="text" ref="body" placeholder="body" />
          </label>
          <label>URL:
            <input onKeyUp={this.props.updateURL}  type="text" ref="url" placeholder="URL" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormFields;
