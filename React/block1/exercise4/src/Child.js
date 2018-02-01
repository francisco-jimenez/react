import React from 'react'


export default class Child extends React.Component{

render(){
    return (
      <div>
        <h1> {this.props.valueToDisplay} !</h1>
      </div>
    )
}



}
