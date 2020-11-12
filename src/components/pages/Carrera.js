
import React, { Component } from 'react'
import '../css/carreras.css'
// import M from 'materialize-css'
export class Carrera extends Component {
  state = {
    titulo: null,

  }
  chequearInformacion = () => {
    //aca agarrariamos la info de la base de datos y despues la guardamos en el state
  }
  componentDidMount = () => {
    console.log("PROPS:", this.props)
  }
  render() {
    return (
      <div className="container">
        <h2>{this.props.match.params.carrera}</h2>
        
      </div>
    )
  }
}

export default Carrera
