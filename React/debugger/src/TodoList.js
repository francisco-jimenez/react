import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
	remove(index) {
		return this.props.remove(index);
	}
	render(){
		return <div>
			{this.props.todos.map((ele, i)=>{
				return <TodoItem
							key  	= {i}
							todo 	= {ele}
							id   	= {i}
							remove = {this.remove.bind(this)}
						/>
			})}
		</div>
	}
}
