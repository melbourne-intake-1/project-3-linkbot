import React from 'react';
import { TextField, RaisedButton } from 'material-ui/';
import {Card, CardHeader } from 'material-ui/Card';

const style = {
  backgroundColor: "#efefef",
  borderRadius: 5,
  margin: 5,
  padding: 0,
  textIndent: 10,
  width: 250
};

export default class FormFields extends React.Component {

  constructor() {
    super();
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
              <Card style={{boxShadow:'none'}} onExpandChange={this.handleExpandChange}>
                <CardHeader title="Create a post" actAsExpander={true} showExpandableButton={true} titleColor="#444"
                  style={{backgroundColor:"#5bc66f", borderRadius:5, boxShadow: "2px 2px 2px #777", marginBottom: 30, marginLeft:'auto', marginRight:'auto', marginTop:20, textTransform:'uppercase', width: 250}}
                />
                <div expandable={true}>
                  <TextField required onKeyUp={this.updateTitleField} name='title'
                    type='text' style={ style } floatingLabelText="Title" />
                  <TextField required onKeyUp={this.updateBodyField} name='body'
                    type='text' style={ style } floatingLabelText="Body" />
                  <TextField required onKeyUp={this.updateUrlField} name='url'
                    type='text' style={ style } floatingLabelText="URL" hintText="E.g. www.google.com"  />
                  <RaisedButton label="submit" backgroundColor= "#525ac4" labelColor="#EEE"
                    buttonStyle={{borderRadius: 5, boxShadow: "1px 1px 1px #777"}}
                    style={{marginBottom: 50, marginTop: 10, textTransform: 'uppercase', width: 250}}
                    type='submit' value='submit' />
                </div>
              </Card>
          </div>
        </form>
      </div>
    );
  }
}
