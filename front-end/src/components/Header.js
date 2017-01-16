import React from 'react'
import MenuDropdown from './MenuDropdown';

//material-ui components
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppBarExampleIconButton = () => (
  <AppBar
    style={{width:'100%'}}
    title={<span style={styles.title}>LinkBot</span>}
    iconElementRight={<MenuDropdown />}
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
        <div>
          <AppBarExampleIconButton />
        </div>
      </header>
    );
  }
}

export default Header;
