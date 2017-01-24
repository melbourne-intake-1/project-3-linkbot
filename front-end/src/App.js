require('dotenv').config()

import React, { Component } from 'react';
import 'whatwg-fetch'; // Polyfills window.fetch
import { fetchCurrentUser } from './api/auth';
import SignInForm from './components/Auth/SignInForm';
import SignedInInfo from './components/Auth/SignedInInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // We first check with the API if a user is signed in
      needsToCheckSignIn: true,
      currentUser: null,
      counters: []
    };

    this.onUserSignedIn = this.onUserSignedIn.bind(this);
    this.onUserSignedOut = this.onUserSignedOut.bind(this);

    fetchCurrentUser()
      .then(user => {
        console.log('User', user)
        this.setState({
          needsToCheckSignIn: false,
          currentUser: user
        })
      })
      .catch(error => {
        console.error('no user', error)
        this.setState({
          needsToCheckSignIn: false
        })
      })
  }

  onUserSignedIn(user) {
    this.setState({ currentUser: user })
  }

  onUserSignedOut() {
    this.setState({ currentUser: null })
  }

  render() {
    const { needsToCheckSignIn, currentUser } = this.state

    return (

        <main className="App">
          <Header userSignedIn={this.state.currentUser} />
            {
            needsToCheckSignIn ? (<p>Loading…</p>)
                               : currentUser ? (<SignedInInfo email={currentUser.email}
                               onUserSignedOut={this.onUserSignedOut} />)
                               : (<SignInForm onUserSignedIn={this.onUserSignedIn} />)
            }

          <Footer />
        </main>

    );
  }
}

export default App;
