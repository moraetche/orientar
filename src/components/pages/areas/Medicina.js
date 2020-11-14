import React, { Component } from 'react'
import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
export class Ingenieria extends Component {
    state = {
        titulo: 'Medicina y asistenciales',
        id: 'medicina',
        imagen: require("../../assets/medicinaimg.jpg"),
        carrera1: {
            id: 'Veterinaria',
            nombre: 'Ciencias veterinarias',
            imagen: require('../../assets/medicina/veterinariasimg.jpg'),
            descripcion: 'Ciencia médica que se dedica a prevenir, diagnosticar y curar las enfermedades de los animales. Así como también heridas y lesiones provocadas por diversos factores.'
        },
        carrera2: {
            id: 'Bioquimica',
            nombre: 'Bioquímica',
            imagen: require('../../assets/medicina/bioquimicaimg.jpg'),
            descripcion: 'La Bioquímica es una ciencia básica dedicada al estudio de los constituyentes químicos de los seres vivos y a las transformaciones asociadas en el curso de la actividad vital.'
        },
        carrera3: {
            id: 'Medicinacarrera',
            nombre: 'Medicina',
            imagen: require('../../assets/medicina/medicoimg.jpg'),
            descripcion: 'Ciencia que permite prevenir y curar las enfermedades del cuerpo humano.'
        },
        carrera4: {
            id: 'Odontologia',
            nombre: 'Odontología',
            imagen: require('../../assets/medicina/odontologiaimg.jpg'),
            descripcion: 'La odontología también denominada estomatología, es una especialidad de la Medicina que se ocupa de la prevención, el diagnóstico y tratamiento de las enfermedades que afectan a cualquier parte de la estructura mandibular.'
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
                                <h5 class="descripcion-area">El progreso de la medicina nos depara el fin de aquella época liberal en la que el hombre aún podía morirse de lo que quería. -Stanislaw Jerzy Lec (Escritor, Poeta)


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
                    <br />
                    <div className="row ">
                        <div className="col s6">
                            <Link to={this.props.match.path + "/" + this.state.carrera3.id}>
                                <h3 className="left-align titulo-carrera">
                                    {this.state.carrera3.nombre}
                                </h3>
                            </Link>
                            <h5 className="descripcion-carrera">{this.state.carrera3.descripcion}</h5>
                        </div>
                        <div className="col s6">
                            <div className="left">
                                <Link to={this.props.match.path + "/" + this.state.carrera3.id}>
                                    <img src={this.state.carrera3.imagen} alt="" className="responsive-img imagen-area z-depth-4 hoverable" />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col s6">
                            <div className="left">
                                <Link to={this.props.match.path + "/" + this.state.carrera4.id}>
                                    <img src={this.state.carrera4.imagen} alt="" className="responsive-img imagen-area z-depth-4 hoverable" />
                                </Link>
                            </div>
                        </div>
                        <div className="col s6">
                            <Link to={this.props.match.path + "/" + this.state.carrera4.id}>
                                <h3 className="left-align titulo-carrera">
                                    {this.state.carrera4.nombre}
                                </h3>
                            </Link>
                            <h5 className="descripcion-carrera">{this.state.carrera4.descripcion}</h5>
                        </div>
                    </div>
                    <br />
                </div>

            </div>
        )
    }
}

export default Ingenieria
