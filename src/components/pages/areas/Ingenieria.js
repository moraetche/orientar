import React, { Component } from 'react'
import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
export class Ingenieria extends Component {
    state = {
        titulo: 'Ingenieria',
        id: 'ingenieria',
        imagen: require("../../assets/ingenieriaimg.jpg"),
        carrera1: {
            id: 'agronoma',
            nombre: 'Ingenieria agrónoma',
            imagen: require('../../assets/ingenieria/agronomaimg.jpg'),
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus deleniti nihil tempore, nisi odio veniam voluptates facere? Nesciunt dolorum consectetur nihil molestiae iste sed velit. Culpa, molestias! Culpa, vitae.'
        },
        carrera2: {
            id: 'industrial',
            nombre: 'Ingenieria industrial',
            imagen: require('../../assets/ingenieria/industrialimg.jpg'),
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus deleniti nihil tempore, nisi odio veniam voluptates facere? Nesciunt dolorum consectetur nihil molestiae iste sed velit. Culpa, molestias! Culpa, vitae.'
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
                                <h5 class="descripcion-area">La ciencia puede divertirnos y fascinarnos, pero es la Ingeniería la que cambia el mundo. -Isaac Asimov (Escritor científico, Bioquímico, Profesor, Autor)
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
