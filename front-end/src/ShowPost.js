import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


class ShowPost extends Component {
  render() {
    return (
          <div className="App">
            <Header />
            <Footer />
          </div>
    );
  }
}

export default ShowPost;
