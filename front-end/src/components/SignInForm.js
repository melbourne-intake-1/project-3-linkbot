import React from 'react';
import { login } from '../api/apiCall';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  backgroundColor:'#EEE',
  borderRadius: 5,
  marginTop: 10,
  padding: 0,
  textIndent: 10,
  width: 300
}

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onSignIn = this.onSignIn.bind(this)
  }

  onSignIn(e) {
    e.preventDefault()
    login(e.target.elements.email.value, e.target.elements.password.value)
      .then(data =>{
        console.log(`data ${data}`)
        this.props.onUserSignIn(data)
      })
  }

  render() {
    return (
      <div >
        <h2>Sign In Form</h2>
<form onSubmit={ this.onSignIn } >
        <div>
          <TextField
            name='email'
            type='email'
            style={ style }
            floatingLabelText="Email"
          />
        </div>
        <br />
        <div>
        <TextField
          name='password'
          type='password'
          style={ style }
          floatingLabelText="Password"
        />
        </div>
        <div>
           <RaisedButton label="SUBMIT" primary={true} style={{ width: 300, marginTop: 10 }} type='submit' />
       </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
