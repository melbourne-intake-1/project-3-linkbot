import React, { Component } from 'react';
import 'whatwg-fetch'; // Polyfills window.fetch
import fetchAPI from './api/fetchAPI'
import { fetchCurrentUser } from './api/auth'
import Counter from './components/Counter'
import Post from './components/Post';
import SignInForm from './components/Auth/SignInForm'
import SignedInInfo from './components/Auth/SignedInInfo'


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
    const { needsToCheckSignIn, currentUser, counters } = this.state

    return (
      <main className="App">
      {
        needsToCheckSignIn ? (
          <p>Loading…</p>
        ) : currentUser ? (
          <SignedInInfo email={currentUser.email} onUserSignedOut={this.onUserSignedOut} />
        ) : (
          <SignInForm onUserSignedIn={this.onUserSignedIn}   />
        )
      }
      <Post userSignedIn={this.state.currentUser} />
      </main>
    );
  }
}

export default App;
