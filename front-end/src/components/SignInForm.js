import React from 'react';
import { login, logout } from '../api/apiCall'

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
          <label>
            Email:
            <input name='email' type='email' />
          </label>
          <label>
            Password:
            <input name='password' type='password' />
          </label>
          <button type='submit'>Sign In</button>
        </form>
        <a onClick={ this.onSignOut } href="#">Sign Out</a>
      </div>
    );
  }
}

export default SignInForm;
