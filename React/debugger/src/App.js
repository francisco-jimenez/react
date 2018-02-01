import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  constructor(){
    super()
    this.state = {
        todos:[
              { todo:"go shopping"  },
              { todo:"eat out"  },
              { todo:"do the laundry" },
              { todo:"pay the bills"  }
            ]
      }
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
