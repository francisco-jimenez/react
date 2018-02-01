import React from 'react'
import Input from './Input'
//import Button from './Button'

export default class App extends React.Component{
constructor(){
  super()
  this.state = {data:''}
  this.getData = this.getData.bind(this)
}

getData(data){
 this.setState({data})
}
  render(){
    return ( 
      <form>

      <Input getData = {this.getData}/>
      <h1>my data is {this.state.data}</h1>
      </form>
    )
  }

}

