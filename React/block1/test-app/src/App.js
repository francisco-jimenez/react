import React from 'react'
import ChildOne from './ChildOne'

export default class App extends React.Component{
  render(){
    return (
            <div>
                <ChildOne 
                    message="Hola Curro"
                />
            </div>
    )
  }
}