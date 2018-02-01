import React from 'react'
export default class Input extends React.Component {
	constructor(){
		super()
		this.state = {
			input:''
		}
	}
	handleChange (e){
		this.setState({input:e.target.value},()=>{
			this.props.getData(this.state.input)
		})

	}
	render(){
		return (
			<input 
				onChange={this.handleChange.bind(this)} 
				name = "text"
				value= {this.state.input}
			/>

			)
	}
}