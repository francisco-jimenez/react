import React from 'react'

export default class App extends React.Component{
constructor(){
  super()
  this.state = {
    data: ''
  }
  this.handleChange = this.handleChange.bind(this)
}
handleChange(event){
  let newName = event.target.value;
  if (newName === ''){
        this.setState(
      {data : "no text provided!"}
    ) 
  } else {
    this.setState(
      {data : newName}
    )    
  }

}

render(){
    return (
      <div>
        <input 
          onChange={this.handleChange.bind(this)} 
          name = "text"
          value= {this.state.data}
        />

        <h1> {this.state.data} </h1>
      </div>
    )
}



}
