import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  title: {
    cursor: 'pointer',
    marginRight: 80
  },
};

const TopNav = () => (
  <div>
    <AppBar
      style={{width: '100%', backgroundColor: '#0f4970'}}
      title={<span style={styles.title}>LinkBot</span>}
      iconElementLeft={<FlatButton label="Logout" style={{backgroundColor: '#1a77c9', color: '#EEE', marginTop: 5}} />}
    />
  </div>
);

class Header extends React.Component {

  render() {
    return (
      <header style={{clear: 'both'}}>
        <div>
          <TopNav />
        </div>
      </header>
    );
  }
}

export default Header;
