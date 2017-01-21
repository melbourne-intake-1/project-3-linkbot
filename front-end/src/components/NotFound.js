import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';


class ShowPost extends Component {
  render() {
    return (
          <div className="App">
            <Header />
            <h4>URL Not Found!</h4>
            <Footer />
          </div>
    );
  }
}

export default ShowPost;
