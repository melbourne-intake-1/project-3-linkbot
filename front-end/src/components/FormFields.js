import React from 'react';

class FormFields extends React.Component {
  constructor() {
    super()
    this.cleanFields = this.cleanFieldsAndSubmit.bind(this)
  }

  cleanFieldsAndSubmit(event, body, title, url) {
    event.preventDefault()
    console.log(this)
    this.props.handleSubmit(body, title, url)
    this.refs.title.value = '';
    this.refs.body.value = '';
    this.refs.url.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.cleanFieldsAndSubmit(event, this.refs.body.value, this.refs.title.value, this.refs.url.value )}>
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
