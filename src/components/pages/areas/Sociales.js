import React, { Component } from 'react'
import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
export class Ingenieria extends Component {
    state = {
        titulo: 'Ciencias Sociales',
        id: 'sociales',
        imagen: require("../../assets/csimg.jpg"),
        carrera1: {
            id: 'Abogacia',
            nombre: 'Abogacía',
            imagen: require('../../assets/sociales/abogaciaimg.jpg'),
            descripcion: 'Un abogado es el profesional en Derecho que se dedica a brindar asesoría jurídica o que defiende o representa a una de las partes en un proceso judicial.'
        },
        carrera2: {
            id: 'Politicas',
            nombre: 'Ciencias Políticas',
            imagen: require('../../assets/sociales/politicasimg.jpg'),
            descripcion: 'La Ciencia Política es una ciencia social que se aboca al estudio y el análisis de las relaciones de poder, implícitas o explícitas, entre la autoridad y los individuos, los grupos, y las organizaciones; y las estructuras, procedimientos y procesos a través de los cuales se llega a las decisiones políticas y se desarrollan las interacciones entre los diferentes sistemas políticos.'
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
                                <h5 class="descripcion-area">No saber lo que ha sucedido antes de nosotros es como ser incesantemente niños. -Cicerón (Filósofo, Poeta, Estadista)

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
