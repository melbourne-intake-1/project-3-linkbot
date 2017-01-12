import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { login, logout } from '../api/apiCall'

const style = {
  backgroundColor:'#EEE',
  borderRadius: 5,
  marginTop: 10,
  padding: 0,
  textIndent: 10,
  width: 300
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onSignIn = this.onSignIn.bind(this)
    this.onSignOut = this.onSignOut.bind(this)
  }

  onSignIn(e) {
    e.preventDefault()
    login(e.target.elements.email.value, e.target.elements.password.value)
      .then(data =>{
        console.log(`data ${data}`)
        this.props.onUserSignIn(data)
      })
  }

  onSignOut(e) {
    alert('yo signout')
    // e.preventDefault()
    logout()
      .then( () => {
        console.log('logging out')
        this.props.onUserSignOut()
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
             <RaisedButton label="submit" primary={true} style={{ backgroundColor: 'pink100', width: 300, marginTop: 10, textTransform: 'uppercase' }} type='submit' />
          </div>
        </form>
        <a onClick={ this.onSignOut } href="#">Sign Out</a>
      </div>
    );
  }
}

export default SignInForm;
