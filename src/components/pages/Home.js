import React, { Component, useRef, useEffect } from 'react'
import '../css/home.css'
import gsap from "gsap"
import M from 'materialize-css'
import {Link} from 'react-router-dom'
export class Home extends Component {
    componentDidMount = () => {
        var options
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, options);
        options = instances;
        useEffect(()=>{
            const tl = gsap.timeline({ defaults: {ease: "power1.out"}});

            tl.to(".text-anim", {y: "0%", duration: 1, stagger: 0.25});
            tl.to(".slider-anim",{y: "-100%", duration: 1.5});
            tl.to(".intro-anim", {y:"-100%", duration: 1}, "-=1");
        }, [])
    }
    render() {
        
       
            
        
        return (
            
         <div className="home" >

                {/* <Anim />
             <div className="intro-anim">
              <div className="intro-text-anim">
                <h1 className="hide-anim">
                    <span className="text-anim">Sample text text</span>
                </h1>
                <h1 className="hide-anim">
                    <span className="text-anim">Sample text</span>
                </h1>
                <h1 className="hide-anim">
                    <span className="text-anim">sample.</span>
                </h1>
              </div>
             </div>
                <div className="slider-anim">
            
               </div> */}
                <div class="slider slider-home sl-home">
                    <ul class="slides slider-home">
                        <li>
                            <img src={require("../assets/homeimg.jpg")} alt="imagen home" className="img-home" />

                            <div class="caption center-align">
                                <h3 className="banner">A un paso de tu futuro, <br />a un click de la mejor elección.</h3>
                                {/*<h6>hola</h6>
                                 <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="slider">
                    <ul class="slides">
                        <li>
                            <img src={require("../assets/ingenieriaimg.jpg")} alt="imagen ingenieria" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Ingeniería</h3>
                                <Link to="/ingenieria">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/medicinaimg.jpg")} alt="imagen medicina" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Medicina y asistenciales</h3>
                                <Link to="/medicina">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/csimg.jpg")} alt="imagen cs" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Ciencias sociales</h3>
                                <Link to="/sociales">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/cnimg.jpg")} alt="imagen cs" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Ciencias naturales</h3>
                                <Link to="/naturales">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/ceximg.jpg")} alt="imagen cs" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Ciencias exactas</h3>
                                <Link to="/exactas">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/ceimg.jpg")} alt="imagen ce" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Ciencias económicas</h3>
                                <Link to="/economicas">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/arteimg.jpg")} alt="imagen arte" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Artes</h3>
                                <Link to="/artes">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/arquitecturaimg.jpg")} alt="imagen arquitectura" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Arquitectura</h3>
                                <Link to="/arquitectura">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <img src={require("../assets/humanidadesimg.jpg")} alt="imagen humanidades" className="sombrita" />
                            <div class="caption left-align">
                                <h3>Humanidades</h3>
                                <Link to="/humanidades">
                                <h5 class="textodeabajo">Haz click para conocer las carreras.</h5>
                                </Link>
                            </div>
                        </li>

                    </ul>
                </div>
                <br/>
            </div>
        )
    }
}

export default Home
