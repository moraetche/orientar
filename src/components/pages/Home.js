import React, { Component } from 'react'
import homeimg from "../assets/homeimg.jpg"
import '../css/home.css'
import M from 'materialize-css'
export class Home extends Component {
  componentDidMount=()=>{
    var options
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
    options = instances;
  }
    render() {
        return (
          
  <div class="slider slider-home">
    <ul class="slides">
      <li>
        <img src={require("../assets/homeimg.jpg")} alt="imagen home" className="img-home"/>
      
        <div class="caption center-align">
          <h3 className= "banner">A un paso de tu futuro, <br/>a un click de la mejor elección.</h3>
           {/* <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
        </div>
      </li>
    </ul>
  </div>
        )
    }
}

export default Home
