import React from 'react'
import ChildName from './ChildName'
import ChildSurname from './ChildSurname'

export default class App extends React.Component{
constructor() {
    super();
    this.names = ['David','Sergio','Diego'];
    this.surnames = ['De Gea','Ramos','Costa'];
}

render(){
    return (
      <div>
        <h1> <ChildName names = {this.names}/> </h1>
        <h1> <ChildSurname surnames = {this.surnames}/> </h1>
      </div>
    )
}



}
