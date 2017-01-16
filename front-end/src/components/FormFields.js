import React from 'react';
import { TextField, RaisedButton } from 'material-ui/';

const style = {
  borderRadius: 5,
  margin: 10,
  padding: 0,
  textIndent: 10,
  width: 250
};


class FormFields extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      url: ''
    }

    this.updateTitleField = this.updateTitleField.bind(this)
    this.updateBodyField = this.updateBodyField.bind(this)
    this.updateUrlField = this.updateUrlField.bind(this)
    this.cleanFields = this.cleanFieldsAndSubmit.bind(this)
  }

  cleanFieldsAndSubmit(event) {
    event.preventDefault()
    console.log(this)
    this.props.handleSubmit(this.state.title, this.state.body, this.state.url)
    this.state.title = '';
    this.state.body = '';
    this.state.url = '';
  }

  updateTitleField(event) {
      this.props.updateTitle(event)

      this.setState({
          title: event.target.value
      });
  }

  updateBodyField(event) {
      this.props.updateBody(event)

      this.setState({
          body: event.target.value
      });
  }

  updateUrlField(event) {
      this.props.updateURL(event)

      this.setState({
          url: event.target.value
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.cleanFieldsAndSubmit(event)}>
          <div>
            <hr />
            <h3>Create New Post</h3>
            <TextField
              onKeyUp={this.updateTitleField}
              name='email'
              type='text'
              style={ style }
              floatingLabelText="Title"
            />
            <TextField
              onKeyUp={this.updateBodyField}
              name='password'
              type='text'
              style={ style }
              floatingLabelText="Body"
            />
            <TextField
              onKeyUp={this.updateUrlField}
              name='password'
              type='text'
              style={ style }
              floatingLabelText="Link (URL)"
            />
             <RaisedButton label="submit" primary={true} style={{ backgroundColor: 'pink100', width: 300, marginTop: 10, marginBottom: 50, textTransform: 'uppercase' }} type='submit' value='submit' />
           </div>
        </form>
      </div>
    );
  }
}

export default FormFields;
