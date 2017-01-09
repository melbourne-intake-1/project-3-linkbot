import React from 'react'

function H1 ({ title }) {
    return (
      <a href="#" style={{ float: 'left' }}>
        <h1 style={{
          color: '#DACD91',
          float: 'left',
          fontSize: '2em',
          letterSpacing: '0.15em',
          marginLeft: '5%',
          marginTop: '20px',
        }}>
        { title }
        </h1>
      </a>
    )
}

function Nav ({ links }) {
  return (
    <ul style={{ marginTop: 35, float: 'right', listStyleType: 'none' }}>
      <a href="#" className="navlink">
        <li style={{
          color: '#DACD91',
          display: 'inline',
          letterSpacing: '0.15em',
          marginRight: '10px',
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
        <Nav links='Logout' />
        <Nav links='Favourites' />
        <Nav links='Posts' />
      </header>
    );
  }
}

export default Header;
