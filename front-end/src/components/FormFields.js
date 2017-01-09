import React from 'react';

class FormFields extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
