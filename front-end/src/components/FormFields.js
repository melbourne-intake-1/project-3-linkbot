import React from 'react';
import { TextField, RaisedButton } from 'material-ui/';
import {Card, CardHeader } from 'material-ui/Card';

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
      url: '',
      expanded: 'false'
    }

    this.updateTitleField = this.updateTitleField.bind(this)
    this.updateBodyField = this.updateBodyField.bind(this)
    this.updateUrlField = this.updateUrlField.bind(this)
    this.cleanFields = this.cleanFieldsAndSubmit.bind(this)
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  cleanFieldsAndSubmit(event) {
    event.preventDefault()
    console.log(this)
    this.props.handleSubmit(this.state.title, this.state.body, this.state.url)
    this.state.title='';
    this.state.body='';
    this.state.url='';
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
            <br/>
              <Card onExpandChange={this.handleExpandChange}>
                <CardHeader title="Create a post" actAsExpander={true} showExpandableButton={true} titleColor="#444" style={{backgroundColor:"#54e59a", borderRadius:5, marginBottom:20, marginLeft:'auto', marginRight:'auto', marginTop:10, textTransform:'uppercase', width: 250}} />
                <div expandable={true}>
                  <TextField onKeyUp={this.updateTitleField} name='title' type='text' style={ style } floatingLabelText="Title" />
                  <TextField onKeyUp={this.updateBodyField} name='body' type='text' style={ style } floatingLabelText="Body" />
                  <TextField onKeyUp={this.updateUrlField} name='url' type='text' style={ style } floatingLabelText="Link (URL)" />
                  <RaisedButton label="submit" backgroundColor= "#67a5db" labelColor="#EEE" style={{marginBottom: 50, marginTop: 10, textTransform: 'uppercase', width: 250}} type='submit' value='submit' />
                </div>
              </Card>
          </div>
        </form>
      </div>
    );
  }
}

export default FormFields;
