import React from 'react'
import Child from './Child'

export default class App extends React.Component{
constructor(){
  super()
}

render(){
    this.name = "Curro";
    return ( 
      <Child name = {this.name}/>
    )
  }

}

