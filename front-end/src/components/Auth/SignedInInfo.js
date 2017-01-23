import React from 'react'
import { signOut } from '../../api/auth';
import { Redirect } from 'react-router';

export default class SignedInInfo extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            error: null
        }

        this.onSignOut = this.onSignOut.bind(this)
    }

    onSignOut(event) {
        event.preventDefault()
        signOut()
        this.props.onUserSignedOut()
    }

    render() {
        return (
            <div>
                <p>{this.props.email}</p>
                <button onClick={this.onSignOut}>Sign Out</button>
                <Redirect from="/" to="/posts" />
            </div>
        )
    }
}
