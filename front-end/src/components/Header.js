import React from 'react'

  // export default function Header({ heading, text }){
  //   return (
  //     <div className="jumbotron">
  //       <h1>{ heading }</h1>
  //       <h2>{ text }</h2>
  //     </div>
  //   )
  // }

function H1 ({ title }) {
    return (
      <a href="#" style={{ float: 'left' }}>
        <h1 style={{
          float: 'left',
          fontSize: '2em',
          fontWeight: '500',
          letterSpacing: '0.15em',
          marginLeft: '5%',
          marginTop: '30px'
        }}>
        { title }
        </h1>
      </a>
    )
}

function Nav ({ links }) {
  return (
    <ul style={{ marginTop: 45, float: 'right', listStyleType: 'none' }}>
      <a href="#" className="navlink">
        <li style={{
          display: 'inline',
          marginRight: '25px',
          textTransform: 'uppercase'
        }}>{ links }</li>
      </a>
    </ul>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <header style={{ clear: 'both' }}>
        <H1 title='LinkBot' />
        <Nav links='Posts' />
        <Nav links='Favourites' />
        <Nav links='Logout' />
      </header>
    );
  }
}

export default Header;
