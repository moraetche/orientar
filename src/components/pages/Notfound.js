
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Notfound extends Component {
    render() {
        return (
            <div className="container center">
              <h3>Error!</h3>
              <h5>No se ha encontrado ninguna pagina con esa URL!</h5>
                <Link to="/"><button className="btn btn-volver">Volver a la home</button></Link>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Notfound
