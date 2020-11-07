import React, { Component } from 'react'

import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
//import {Link} from 'react-router-dom'
export class Ingenieria extends Component {
  state={
    titulo: 'Ingenieria',
    imagen: require("../../assets/ingenieriaimg.jpg")
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
                            <img src={this.state.imagen} alt="imagen Ingenieria" className="img-home" />

                            <div class="caption left-align">
                                <h3 className="banner">{this.state.titulo}</h3>
                                <h5 class="descripcion-area">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                                </h5>
                            </div>
                        </li>
                    </ul>
                </div>
             </div> 
        )
    }
}

export default Ingenieria
