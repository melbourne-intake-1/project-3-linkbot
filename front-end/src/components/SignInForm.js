import React from 'react';
import { login } from '../api/apiCall'

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
    //e.target.elements.email.value
    alert(e.target.elements.password.value)
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
          <label>
            Email:
            <input name='email' type='email' />
          </label>
          <label>
            Password:
            <input name='password' />
          </label>
          <button type='submit'>Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
