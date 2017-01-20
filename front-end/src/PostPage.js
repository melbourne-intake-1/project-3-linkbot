import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import './App.css';


class PostPage extends Component {
  render() {
    return (
          <div className="App">
            <Header />
            <Post />
            <Footer />
          </div>
    );
  }
}

export default PostPage;
