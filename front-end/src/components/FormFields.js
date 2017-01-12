import React from 'react';
import { TextField, RaisedButton } from 'material-ui/';

const style = {
  backgroundColor:'#EEE',
  borderRadius: 5,
  marginTop: 10,
  padding: 0,
  textIndent: 10,
  width: 300
};


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
          <div>
            <TextField
              onKeyUp={this.props.updateTitle}
              name='email'
              ref= 'title'
              type='text'
              style={ style }
              floatingLabelText="Post Title"
            />
          </div>
          <br />
          <div>
            <TextField
              onKeyUp={this.props.updateBody}
              name='password'
              ref='body'
              type='text'
              style={ style }
              floatingLabelText="Post Body"
            />
          </div>
          <div>
            <TextField
              onKeyUp={this.props.updateURL}
              name='password'
              ref='url'
              type='text'
              style={ style }
              floatingLabelText="URL"
            />
          </div>
          <div>
             <RaisedButton label="submit" primary={true} style={{ backgroundColor: 'pink100', width: 300, marginTop: 10, textTransform: 'uppercase' }} type='submit' value='submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default FormFields;
