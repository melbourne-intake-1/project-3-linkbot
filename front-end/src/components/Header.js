import React from 'react'
import Navbar from './Navbar'

  // export default function Header({ heading, text }){
  //   return (
  //     <div className="jumbotron">
  //       <h1>{ heading }</h1>
  //       <h2>{ text }</h2>
  //     </div>
  //   )
  // }

class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    )  
  }
}

export default Header;  