import React from 'react'

//material-ui components
import { TextField } from 'material-ui/';
import { Link } from 'react-router';


function MainNav ({ title, link }) {
    return (
       <div className="App">
         <div className="App-header">
           <h1>{ title }</h1>
         </div>
         <div>
          <Link to='#'>{ link }</Link>
             <br/>
         <TextField
             hintText="Type something here"
             floatingLabelText="This is a text field from App component"
             fullWidth={true}
           />
         </div>
       </div>
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
        <MainNav title='LinkBot' link='Posts' />
      </header>
    );
  }
}

export default Header;
