import React from 'react'
import TodoItem from './TodoItem'


export default class ChildTodoList extends React.Component{

constructor(){
  super();
  this.deleteItem = this.deleteItem.bind(this);
}

deleteItem(i){
  return this.props.deleteItem(i);
}

oddLine(todo, index){
  return <TodoItem color = 'AliceBlue' i={index} TodoItem = {todo} deleteItem = {this.deleteItem}/>
}

evenLine(todo, index){
  return <TodoItem color = 'Aqua' i={index} TodoItem = {todo} deleteItem = {this.deleteItem}/>
}

render(){
    return (

          <div >
          {
            //var listOfTodos = this.props.todos; What is the problem??
            this.props.todos.map((todo, index) =>{
                      if(index %2 === 0) {
                          return this.oddLine(todo,index)
                      } else {
                          return this.evenLine(todo, index)
                      }


            })
          }
          </div>
    )
}



}
