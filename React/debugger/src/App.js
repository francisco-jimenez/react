import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  constructor(){
    super()
    this.state = {
        todos:[
              "go shopping",
              "eat out" ,
              "do the laundry" ,
              "pay the bills"
            ]
      }
    this.remove = this.remove.bind(this)
  }

  remove(index){
    var tempState = this.state.todos
    tempState.splice(index,1)
    this.setState({todos:tempState})

  }
  render() {
    return (
      <div className="App">
          <TodoList
              remove = { this.remove}
              todos  = { this.state.todos}/>
      </div>
    );
  }
}

export default App;
