import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer',
    marginRight: 40,
  },
};

const AppBarExampleIconButton = () => (
  <AppBar
    style={{showMenuIconButton: 'false', width: '100%', backgroundColor: '#f25e02'}}
    title={<span style={styles.title}>LinkBot</span>}
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
