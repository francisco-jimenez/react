import React from 'react'


export default class ChildName extends React.Component{

render(){
    return (
      <div>
      {
          this.props.names.map((name, i) =>
            <li>{name}</li>
          )
      }
      </div>
    )
}



}
