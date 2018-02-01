import React from 'react'


export default class ChildSurname extends React.Component{

render(){
    return (
      <div>{
            this.props.surnames.map((surname) =>
              <li>{surname}</li>
            )
      }</div>
    )
}

}
