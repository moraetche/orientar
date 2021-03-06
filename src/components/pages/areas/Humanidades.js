import React, { Component } from 'react'
import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
export class Humanidades extends Component {
    state = {
        titulo: 'Humanidades',
        id: 'humanidades',
        imagen: require("../../assets/humanidadesimg.jpg"),
        carrera1: {
            id: 'Filosofia',
            nombre: 'Filosofia',
            imagen: require('../../assets/humanidades/filosofiaimg.jpg'),
            descripcion: 'La Filosofía es una disciplina que estudia y reflexiona constantemente sobre los enigmas constitutivos a la esencia del ser humano.'
        },
        carrera2: {
            id: 'Psicologia',
            nombre: 'Psicologia',
            imagen: require('../../assets/humanidades/psicologiaimg.jpg'),
            descripcion: 'La carrera de Psicología forma profesionales capaces de estudiar, comprender y analizar los actos,conductas y procesos mentales normales y anormales del ser humano por medio de la observación de sus acciones, reacciones, decisiones, comportamiento verbal, movimiento corporal y otros eventos observables así como mediante la aplicación de instrumentos científicos, para llegar a conclusiones y brindar diagnósticos y soluciones a problemas.'
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
                                <h5 class="descripcion-area">Hay una ciencia que debe ocupar toda la vida del hombre, desde que su razón despierta hasta que deja de vivir: tal es la moral o ciencia de la conducta, la más práctica e interesante de todas, pues de su conocimiento y aplicación depende que la humanidad avance o retroceda. -Alberto Masferrer (Profesor, Poeta)
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

export default Humanidades
