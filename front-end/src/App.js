import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header title="LinkBot" />
        </div>
        <p>
          This is where we'll need to require the actual app content
        </p>
        <Post />
        <Footer text="some text for the footer" />
      </div>
    );
  }
}

export default App;
