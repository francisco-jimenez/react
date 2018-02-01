import React from 'react'
import ChildTodoList from './ChildTodoList'

export default class App extends React.Component{
constructor() {
    super();
    this.state= {todos : []};
    this.deleteItem = this.deleteItem.bind(this);
}

deleteItem(index){
  var newTodos = this.state.todos;
  newTodos.splice(index, 1);
  this.setState({todos : newTodos})
}


addTodo(event) {
  event.preventDefault();
  var newTodos = this.state.todos;
  newTodos.push(this.refs.texto.value);
  this.setState({todos : newTodos})
}
render(){
    return (
      <div>
        <form onSubmit = {this.addTodo.bind(this)}>
            <input ref="texto" type="text"></input>
            <button type="submit">Enviar</button>
        </form>
        <ChildTodoList todos = {this.state.todos} deleteItem = {this.deleteItem} />
      </div>
    )
}



}



// WEBPACK FOOTER //
// src/App.js
