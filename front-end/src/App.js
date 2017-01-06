import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Link from './components/Link';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header heading="Test Heading" text="this is some text" />
        </div>
        <p>
          This is where we'll need to require the actual app content
        </p>
        <Link />
        <Footer text="some text for the footer" />
      </div>
    );
  }
}

export default App;
