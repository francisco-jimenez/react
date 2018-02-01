
import React from 'react'
//import styles from './App.css';


export default class TodoItem extends React.Component{

render(){
    return (

          <div className = "list-container" style = {{backgroundColor : this.props.color ,  borderStyle: 'solid', borderWidth: '1px'}} >
          {
                <li key= {this.props.i} >
                    -> {this.props.TodoItem}
                    <i className="fa fa-trash-o" onClick={() => this.props.deleteItem(this.props.i)} aria-hidden="true"></i>
                </li>
          }
          </div>
    )
}



}
