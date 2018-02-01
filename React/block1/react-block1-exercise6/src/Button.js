import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button onClick={this.props.showFullName}> Show!</button>
    );
  }

}

export default Button;
