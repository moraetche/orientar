import React, { Component } from 'react'
import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
export class Ingenieria extends Component {
    state = {
        titulo: 'Arquitectura',
        id: 'arquitectura',
        imagen: require("../../assets/arquitecturaimg.jpg"),
        carrera1: {
            id: 'diseñador',
            nombre: 'Diseñador/a Gráfico/a',
            imagen: require('../../assets/ingenieria/agronomaimg.jpg'),
            descripcion: 'La arquitectura es el arte de gastar el espacio. -Philip Johnson (Arquitecto, Historiador de arte)'
        },
        
    }
    componentDidMount = () => {
        // let id = this.props.match.path
        // let fixed = ""
        // for (let i = 0; i < id.length; i++) {
        //     const element = id[i];
        //     if (i !== 0){
        //         fixed = fixed + element
        //     }
        // }
        // console.log(fixed);
        // console.log(this.props.match.path);
        var options
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, options);
        options = instances;
    }
    render() {
        return (
            <div className="areas" >
                <div class="slider slider-home sl-home">
                    <ul class="slides slider-home">
                        <li>
                            <img src={this.state.imagen} alt="imagen Ingenieria" className="img-home" />
                            <div class="caption left-align">
                                <h3 className="banner">{this.state.titulo}</h3>
                                <h5 class="descripcion-area">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                                </h5>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="areas-carreras container">

                    <br />
                    <div className="row ">
                        <div className="col s6">
                            <Link to={this.props.match.path + "/" + this.state.carrera1.id}>
                                <h3 className="left-align titulo-carrera">
                                    {this.state.carrera1.nombre}
                                </h3>
                            </Link>
                            <h5 className="descripcion-carrera">{this.state.carrera1.descripcion}</h5>
                        </div>
                        <div className="col s6">
                            <div className="left">
                                <Link to={this.props.match.path + "/" + this.state.carrera1.id}>
                                    <img src={this.state.carrera1.imagen} alt="" className="responsive-img imagen-area z-depth-4 hoverable" />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <br />
                        <div className="col s6">
                            <Link to={this.props.match.path + "/" + this.state.carrera2.id}>
                                <h3 className="left-align titulo-carrera">
                                    {this.state.carrera2.nombre}
                                </h3>
                            </Link>
                            <h5 className="descripcion-carrera">{this.state.carrera2.descripcion}</h5>
                        </div>
                    </div>
                    <br />
                </div>

            </div>
        )
    }
}

export default Ingenieria
