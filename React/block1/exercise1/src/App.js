import React from 'react'

export default class App extends React.Component{
constructor(){
  super()
  this.state = {data:''}
  this.getData = this.getData.bind(this)
}

getData(data){
 this.setState({data})
}
  render(){
    var arr = ['antonello','mike','peter']

    return ( 
      <div>
          {
            arr.map((ele, i)=>{
              return <h1 key= {i} >name is : {ele}</h1>
          })
          }
      </div>

    )
  }

}
