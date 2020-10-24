import React, { Component } from 'react'
import '../css/layout.css'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
    
    render() {
            return(
    <>
      <ul id="dropdown1" class="dropdown-content">
        <li><NavLink to="#!">one</NavLink></li>
        <li><NavLink to="#!">two</NavLink></li>
        <li class="divider"></li>
        <li><NavLink to="#!">three</NavLink></li>
      </ul>

      <nav class="navbar">
        <div class="nav-wrapper">
          <NavLink to="/" class="brand-logo">Orientar</NavLink>
          <ul class="right hide-on-med-and-down">
            <li><NavLink class="dropdown-trigger dropdown-areas" to="#areas" data-target="dropdown1">Áreas<i class="material-icons right">arrow_drop_down</i></NavLink></li>
          </ul>
        </div>
      </nav>
    </>
      )
    }
}

export default Navbar