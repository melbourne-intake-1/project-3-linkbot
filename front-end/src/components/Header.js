import React from 'react'

//material-ui components
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer',
    marginRight: 40,
  },
};

const AppBarExampleIconButton = () => (
  <AppBar
    style={{width:'100%', backgroundColor: '#253a87'}}
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
