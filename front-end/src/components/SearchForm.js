import React from 'react';
import { TextField } from 'material-ui/';

const style = {
  backgroundColor: "#efefe6",
  borderRadius: 5,
  margin: 10,
  padding: 0,
  textIndent: 10,
  width: 250
};

class SearchForm extends React.Component {
  constructor() {
    super()
    this.state = {

    }
    this.searchEntry = this.searchEntry.bind(this)

  }

  searchEntry(e){
    console.log(e.target.value)
    this.props.searchEntry(e.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <TextField onKeyUp={this.searchEntry} name='search' type='text' style={ style } floatingLabelText="Search Posts" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
