import React from 'react'
//material-ui components
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>LinkBot</span>}
    iconElementRight={<FlatButton label="Posts" />}
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
        <AppBarExampleIconButton />
      </header>
    );
  }
}

export default Header;
