import React, { Component } from 'react';

class SurnameInput extends Component {


  render() {
    return (
      <input type = 'text' onChange = {this.props.setSurname}/>
    );
  }

}

export default SurnameInput;
