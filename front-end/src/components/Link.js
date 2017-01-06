import React from 'react'
import axios from 'axios'
import { apiGet } from '../api/apiCall'


class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      stuff: 'stuff'
    }
    this.getPosts = this.getPosts.bind(this)

  }   

  getPosts() {
    var th = this;
    this.serverRequest = 
      axios.get("https://linkbot-ytogugajwv.now.sh/links")
        .then(function(result) {    
          th.setState({
            links: result.data,
            time: Date()
          });
        })
  }



  handleClick() {
    console.log(this) // the React Component instance
    alert('Hai')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Button</button>
        <button onClick={this.getPosts}>API Get</button>
        <button onClick={this.populatePosts}>Populate</button>
        <p>links {this.state.links} </p>
        <p>stuff {this.state.stuff} </p>
      </div>  
    );
  }
}

export default Link;