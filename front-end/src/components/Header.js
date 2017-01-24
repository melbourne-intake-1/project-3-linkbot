import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
// import signOut from './Auth/SignedInInfo';
// import { signOut } from '../api/auth';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <AppBar
          style={{width: '100%', backgroundColor: '#0f4970'}}
          title={<span style={{cursor: 'pointer', letterSpacing: 0.15, marginRight: 80}}>LinkB<i className="material-icons">android</i>t</span>}
          iconElementLeft={<FlatButton label="Logout" style={{backgroundColor: '#1a77c9', color: '#EEE', marginTop: 5}} />}
        />
      </div>
    );
  }
}
