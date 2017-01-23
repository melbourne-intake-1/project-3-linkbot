import React, { PropTypes } from 'react'
import { signIn } from '../../api/auth'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Validate passed email and password, and sign in
function validatedSignIn({ email, password }) {
    // Trim to remove spaces
    email = email.trim()
    password = password.trim()

    // Check for missing email
    if (email.length === 0) {
        return Promise.reject(new Error('Please enter an email'))
    }
    // Check for missing password
    else if (password.length === 0) {
        return Promise.reject(new Error('Please enter a password'))
    }

    // All validated, so sign in
    return signIn({ email, password })
}

// CSS styles we use in render() below
const style = {

  borderRadius: 5,
  display: 'block',
  marginBottom: 10,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 10,
  textIndent: 10
};

export default class SignInForm extends React.PureComponent {
    static propTypes = {
        onUserSignedIn: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            error: null
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(event) {
        event.preventDefault()

        const form = event.target
        const { elements } = form

        validatedSignIn({
            email: elements.email.value,
            password: elements.password.value
        })
        // Success! Pass our signed in user along
        .then(data => {
            this.props.onUserSignedIn(data)
        })
        // Error either from validation or the server
        .catch(error => {
            // Give a nice error message
            if (error.message === 'Unauthorized') {
                // Message inspired by Twitter
                error = new Error('The email and password that you entered did not match our records.')
            }

            this.setState({ error })
        })
    }

    render() {
        const { error } = this.state

        return (
            <div>
                { error &&
                    <p>{ error.message }</p>
                }
              <form onSubmit={ this.onSignIn }>
                <div>
                  <TextField
                    onKeyUp={this.updateTitleField}
                    name='email'
                    type='email'
                    style={ style }
                    floatingLabelText="Email"
                  />
                  <TextField
                    onKeyUp={this.updateBodyField}
                    name='password'
                    type='password'
                    style={ style }
                    floatingLabelText="Password"
                  />
                   <RaisedButton label="submit" primary={true} style={{ backgroundColor: 'pink100', width: 300, marginTop: 10, marginBottom: 30, textTransform: 'uppercase' }} type='submit' value='submit' />
                 </div>
               </form>
            </div>
        )
    }
}
