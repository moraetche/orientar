
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Ingagronoma extends Component {
	state = {
		titulo: null,
	};
	chequearInformacion = () => {
		//aca agarrariamos la info de la base de datos y despues la guardamos en el state
	};
	componentDidMount = () => {
		console.log('PROPS:', this.props);
	};
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col m6 '>
          <br></br>
            <br></br>
						<h2>Ingeniería agrónoma</h2>
						<p>
						El ingeniero agrónomo es el profesional de la ingeniería y la tecnología encargado de manejar los recursos naturales de manera racional para desarrollar el sector agropecuario, el medio rural y la industria agroalimentaria. Ellos hacen posible que los agricultores y los ganaderos trabajen de un modo más eficiente
						</p>
						<li className= 'lista-de-info'>Carga horaria total: 3.752</li>
						<li className= 'lista-de-info'>Duración estimada en años: 5,5</li>
						<li className= 'lista-de-info'>Título intermedio: Bachiller Universitario en Agronomía</li>
						<li className= 'lista-de-info'>Título final: Ingeniero Agrónomo</li>
						<li className= 'lista-de-info'>Facultad de Agronomía: Av. San Martín 4453, C1417DSE, Ciudad Autónoma de Buenos Aires.</li>

					</div>
					<div className='col m6'>
						<img className='imgcarreras' src='https://picsum.photos/300' alt='' />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						No encontramos cursante.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							No encontramos cursante.
						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						No encontramos cursante.
						</p>
					</div>
          <h6> Donde contactar: </h6>
		                <li className= 'contactos'><a href="https://www.agro.uba.ar/sites/default/files/carreras/agro_plan_2017_julio_19.pdf">Link plan de estudios</a></li>
						
						<li className= 'contactos'><a href="https://www.agro.uba.ar/alumnos/comoingreso">Link Inscripcion</a></li>
						<li className= 'contactos'><a href="https://www.agro.uba.ar/carreras/agronomia">Link Página carrera</a></li>
						<li className= 'contactos'>Mail consultas: diragron@agro.uba.ar</li>
						<li className= 'contactos'>Telefono consultas: (+54) 11 5287-0032</li>
				</div>
			</div>
		);
	}
}

export default Ingagronoma;