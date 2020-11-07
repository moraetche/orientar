import React, { Component } from 'react'

import '../../css/home.css'
import '../../css/area.css'
import M from 'materialize-css'
//import {Link} from 'react-router-dom'
export class Medicina extends Component {
  state={
    titulo: 'Medicina',
    imagen: require("../../assets/medicinaimg.jpg")
  }
    componentDidMount = () => {
        var options
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, options);
        options = instances;
    }
    render() {
        return (
            <div className="home" >
                <div class="slider slider-home sl-home">
                    <ul class="slides slider-home">
                        <li>
                            <img src={this.state.imagen} alt="imagen medicina" className="img-home" />

                            <div class="caption left-align">
                                <h3 className="banner">{this.state.titulo}</h3>
                                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                    </ul>
                </div>
             </div>  
        )
    }
}

export default Medicina
