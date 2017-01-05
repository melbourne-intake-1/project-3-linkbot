import React from 'react'

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
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    )  
  }
}

export default Header;  