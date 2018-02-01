import React, { Component } from 'react';
import NameInput from './NameInput'
import SurnameInput from './SurnameInput'
import Button from './Button'

class App extends Component {

  constructor() {
    super();
    this.name = '';
    this.surname = '';
    this.setName = this.setName.bind(this);
    this.setSurname = this.setSurname.bind(this);
    this.showFullName = this.showFullName.bind(this);
    this.state = {fullName : ''};
  }

  setName(e) {
    this.name = e.target.value;
  }

  setSurname(e) {
    this.surname = e.target.value;
  }

  showFullName(){
    this.setState({fullName : this.name + ' ' + this.surname})
  }

  render() {
    return (
      <div>
          <NameInput setName = {this.setName}/>
          <SurnameInput setSurname = {this.setSurname}/>
          <Button showFullName = {this.showFullName}></Button>
          <br/>
            {this.state.fullName}
      </div>
    );
  }

}

export default App;
