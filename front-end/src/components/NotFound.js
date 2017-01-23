import React, { Component } from 'react';
import Header from '../components/Header';
import '../App.css';


class ShowPost extends Component {
  render() {
    return (
          <div className="App">
            <Header />
            <h4>404 Error: URL Not Found</h4>
          </div>
    );
  }
}

export default ShowPost;
