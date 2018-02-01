import React from 'react'
import GrandChild from './GrandChild'

export default class ChildOne extends React.Component {
	render(){
		return ( 
			<GrandChild text = {this.props.text}
			/>
		)
	}
}