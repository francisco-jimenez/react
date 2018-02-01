import React, { Component } from 'react';

class NameInput extends Component {


  render() {
    return (
      <input type = 'text' onChange = {this.props.setName}></input>
    );
  }

}

export default NameInput;
