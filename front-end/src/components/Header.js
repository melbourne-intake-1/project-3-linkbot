import React from 'react'
import { Nav, Navbar, Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function H1 ({ title, link }) {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{ title }</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">{ link }</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
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
        <H1 title='LinkBot' link='Posts' />
      </header>
    );
  }
}

export default Header;
