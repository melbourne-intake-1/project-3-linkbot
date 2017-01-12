import React, { Component } from 'react';
import './index.css';

import { MuiThemeProvider, getMuiTheme, darkBaseTheme } from 'material-ui/styles';

import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import SignInForm from './components/SignInForm';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // We first check with the API if a user is signed in
      userLoggedIn: "Nah bro",
      currentUser: null,
    };

    this.onUserSignedIn = this.onUserSignedIn.bind(this);
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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <div className="App-header">
            <Header title="LinkBot" />
          </div>
          <h3>User Signed In? {this.state.userLoggedIn} {this.state.currentUser}</h3>
          <SignInForm onUserSignIn={this.onUserSignedIn} />
          <Post />
          <Footer text="Footer text" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
