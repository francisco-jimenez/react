import React from 'react'

export default class Child extends React.Component{
constructor(){
  super()
}

  render(){
     return (
      <h1>{this.props.name} I am a child component</h1>
    )
  }

}
