import React from 'react'
import GrandChild from './ChildOne'

export default class ChildOne extends React.Component{
  render(){
    return (
            <div>
            	<GrandChild message = {this.props.message}/>
            </div>
    )
  }
}