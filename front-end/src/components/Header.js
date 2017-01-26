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
          style={{width: '100%', backgroundColor: '#268eb7'}}
          title={<div style={{cursor:'pointer', letterSpacing: 4, marginRight: 30}}>
            LinkBot</div>}
          iconElementLeft={<i className="material-icons" style={{color:"#EEE", marginLeft: 10, marginTop: 10}}>android</i>}
        />
      </div>
    );
  }
}


{/*iconElementLeft={<FlatButton label="Logout" style={{backgroundColor: '#5bc66f', borderColor: "#888", borderRadius: 5, borderStyle: 'ridge', borderWidth: 1, color: '#FFF', marginTop: 5}} />} */}
