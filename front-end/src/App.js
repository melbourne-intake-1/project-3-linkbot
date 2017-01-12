import React, { Component } from 'react';
import './index.css';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import SignInForm from './components/SignInForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // We first check with the API if a user is signed in
      userLoggedIn: "User logged in, no",
      currentUser: null,
    };

    this.onUserSignedIn = this.onUserSignedIn.bind(this);
    this.onUserSignedOut = this.onUserSignedOut.bind(this);
  }

  onUserSignedOut(){
   this.setState({
     userLoggedIn: "Nah bro",
     currentUser: null
   })
  }

  onUserSignedIn(user) {
    console.log('data incoming')
    console.log(user)
    if(user){
      this.setState({
        userLoggedIn: "yeah man",
        currentUser: [user.data._id, user.data.email]
      })
    } else {
      this.setState({
        userLoggedIn: "Wrong Info Entered"
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <div className="App-header">
            <Header title="LinkBot" />
          </div>
            <h3>{this.state.userLoggedIn} {this.state.currentUser}</h3>
            <SignInForm onUserSignIn={this.onUserSignedIn} />
            <Post />
            <Footer text="Footer text" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
