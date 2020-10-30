import React, { Component } from 'react'
// import homeimg from "../assets/homeimg.jpg"
// import ingenieriaimg from "../assets/ingenieriaimg.jpg"
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
          <div className="home">
  <div class="slider slider-home">
    <ul class="slides slider-home">
      <li>
        <img src={require("../assets/homeimg.jpg")} alt="imagen home" className="img-home"/>
      
        <div class="caption center-align">
          <h3 className= "banner">A un paso de tu futuro, <br/>a un click de la mejor elección.</h3>
           {/* <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
        </div>
      </li>
    </ul>
  </div>

  <div class="slider">
    <ul class="slides">
      <li>
        <img src={require("../assets/ingenieriaimg.jpg")} alt= "imagen ingenieria" className= "ingenieriaimg"/>
        <div class="caption left-align">
          <h3>Ingeniería</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>

      <li>
        <img src={require("../assets/medicinaimg.jpg")} alt= "imagen medicina" className= "medicinaimg"/>
        <div class="caption left-align">
          <h3>Medicina y asistenciales</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>

      <li>
        <img src={require("../assets/csimg.jpg")} alt= "imagen cs" className= "csimg"/>
        <div class="caption left-align">
          <h3>Ciencias sociales</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>

      <li>
        <img src={require("../assets/cnimg.jpg")} alt= "imagen cs" className= "cnimg"/>
        <div class="caption left-align">
          <h3>Ciencias naturales</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>

      <li>
        <img src={require("../assets/ceximg.jpg")} alt= "imagen cs" className= "ceximg"/>
        <div class="caption left-align">
          <h3>Ciencias exactas</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>

      <li>
        <img src={require("../assets/ceimg.jpg")} alt= "imagen ce" className= "ceimg"/>
        <div class="caption left-align">
          <h3>Cienicas económicas</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>
      
      <li>
        <img src={require("../assets/arteimg.jpg")} alt= "imagen arte" className= "arteimg"/>
        <div class="caption left-align">
          <h3>Artes</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>
      
      <li>
        <img src={require("../assets/arquitecturaimg.jpg")} alt= "imagen arquitectura" className= "arquitecturaimg"/>
        <div class="caption left-align">
          <h3>Arquitectura</h3>
          <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
        </div>
      </li>

    </ul>
  </div>
  </div>
        )
    }
}

export default Home
