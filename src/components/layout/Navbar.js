import React, { Component } from 'react'
import '../css/layout.css'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
      <>
        <ul id="dropdown1" className="dropdown-content">
          <li><NavLink to="/ingenieria">Ingeniería</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/medicina">Medicina y asistenciales</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/sociales">Ciencias sociales</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/naturales">Ciencias naturales</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/exactas">Ciencias exactas</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/economicas">Ciencias económicas</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/artes">Artes</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/arquitectura">Arquitectura</NavLink></li>
          <li className="divider"></li>
          <li><NavLink to="/humanidades">Humanidades</NavLink></li>
        </ul>
        <nav className="navbar">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">Orientar</NavLink>
            <ul className="right hide-on-med-and-down">
              <li><NavLink className="dropdown-trigger dropdown-areas" to="#areas" data-target="dropdown1">Áreas<i className="material-icons right">arrow_drop_down</i></NavLink></li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar