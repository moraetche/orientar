import React, { Component } from 'react'
import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
export class Ingenieria extends Component {
    state = {
        titulo: 'Ciencias Naturales',
        id: 'naturales',
        imagen: require("../../assets/cnimg.jpg"),
        carrera1: {
            id: 'Ingagronoma',
            nombre: 'Ingenieria agrónoma',
            imagen: require('../../assets/ingenieria/agronomaimg.jpg'),
            descripcion: 'El ingeniero agrónomo es el profesional de la ingeniería y la tecnología encargado de manejar los recursos naturales de manera racional para desarrollar el sector agropecuario, el medio rural y la industria agroalimentaria. Ellos hacen posible que los agricultores y los ganaderos trabajen de un modo más eficiente'
        },
        carrera2: {
            id: 'Veterinaria',
            nombre: 'Ciencias Veterinarias',
            imagen: require('../../assets/naturales/veterinariasimg.jpg'),
            descripcion: 'Ciencia médica que se dedica a prevenir, diagnosticar y curar las enfermedades de los animales. Así como también heridas y lesiones provocadas por diversos factores.'
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
                                <h5 class="descripcion-area">La tarea de la ciencia natural no consiste en aceptar simplemente cosas relatadas, sino en investigar las causas de los sucesos naturales. -Alberto Magno (Biólogo, Químico, Médico, Filósofo)

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
                    <div className="row">
                        <div className="col s6">
                            <div className="left">
                                <Link to={this.props.match.path + "/" + this.state.carrera2.id}>
                                    <img src={this.state.carrera2.imagen} alt="" className="responsive-img imagen-area z-depth-4 hoverable" />
                                </Link>
                            </div>
                        </div>
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
