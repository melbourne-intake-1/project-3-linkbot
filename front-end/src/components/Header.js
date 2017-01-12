import React from 'react'

//material-ui components
import { TextField } from 'material-ui/';
import { Link } from 'react-router';
import { AppBar } from 'material-ui/';


const AppBarExampleIcon = () => (
  <AppBar
    title="LinkBot"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <header style={{ clear: 'both' }}>
        <AppBarExampleIcon link='Posts' />
      </header>
    );
  }
}

export default Header;
