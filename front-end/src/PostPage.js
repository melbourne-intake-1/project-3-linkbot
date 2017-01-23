import React, { Component } from 'react';
import Header from './components/Header';
import SignedInInfo from './components/Auth/SignedInInfo';
import Footer from './components/Footer';
import Post from './components/Post';
import FormFields from './components/FormFields';
import './App.css';


class PostPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignedInInfo />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default PostPage;
