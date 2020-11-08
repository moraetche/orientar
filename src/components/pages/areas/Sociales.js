import React, { Component } from 'react'
import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
//import {Link} from 'react-router-dom'
export class Ingenieria extends Component {
    state = {
        titulo: 'Ingenieria',
        imagen: require("../../assets/ingenieriaimg.jpg"),
        carrera1: {
            nombre: 'Ingenieria agrónoma',
            imagen: require('../../assets/ingenieria/agronomaimg.jpg'),
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus deleniti nihil tempore, nisi odio veniam voluptates facere? Nesciunt dolorum consectetur nihil molestiae iste sed velit. Culpa, molestias! Culpa, vitae.'
        }
    }
    componentDidMount = () => {
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
                            <img src={this.state.imagen} alt="imagen Sociales" className="img-home" />

                            <div class="caption left-align">
                                <h3 className="banner">{this.state.titulo}</h3>
                                <h5 class="descripcion-area">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                                </h5>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="areas-carreras container">

                    <div className="row ">
                        <div className="col s6">
                            <h3 className="left-align">
                                {this.state.carrera1.nombre}
                            </h3>
                            <h5>{this.state.carrera1.descripcion}</h5>
                        </div>
                        <div className="col s6">
                            <div className="left">
                                <img src={this.state.carrera1.imagen} alt="" className="responsive-img imagen-area" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="left">
                                <img src={this.state.carrera1.imagen} alt="" className="responsive-img imagen-area" />
                            </div>
                        </div>
                        <div className="col s6">
                            <h3 className="left-align">
                                {this.state.carrera1.nombre}
                            </h3>
                            <h5>{this.state.carrera1.descripcion}</h5>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Ingenieria
