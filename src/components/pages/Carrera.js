
import React, { Component } from 'react'

export class Carrera extends Component {
  state={
    
  }
  componentDidMount = () =>{
    console.log("PROPS:", this.props)     
  }
    render() {
        return (
            <div className="center">
            <h1> ARCHIVO CARRERA.JS </h1>
            Area: {this.props.match.params.area} <br/>
            Carrera: {this.props.match.params.carrera}
            </div>
        )
    }
}

export default Carrera
