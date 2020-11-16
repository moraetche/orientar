
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Medicinacarrera extends Component {
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
						<h2>Medicina</h2>
						<p>
						Ciencia que permite prevenir y curar las enfermedades del cuerpo humano.
						</p>
						<li className= 'lista-de-info'>Duración estimada en años: 7</li>
						<li className= 'lista-de-info'>Título final: Medico/a</li>
						
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
						Biología, Química.

						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Que si lo elige sea con el corazón, la carrera es larga y dura, pero te alienta saber que un día vas a poder sanar muchos cuerpos. 
También es importante destacar que la carrera tiene cosas que dan muchísima impresión, ya que en el primer año después del CBC, que es muy complicado, hay materias en las que se ven cuerpos reales bañados en formol por ejemplo, y si eso da impresión después lo que aparece en una guardia hospitalaria es diez veces peor.

						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Mi consejo es que no se frustren si desaprueban, que sigan estudiando porque es una carrera que se recibe el que persevera y que siempre tenga el foco de porqué eligió esta carrera.

						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li className= 'contactos'><a href="https://www.fmed.uba.ar/carreras/medicina/plan-de-estudios-plan-cs-286192">Link plan de estudios</a></li>
						
            <li className= 'contactos'><a href="https://www.fmed.uba.ar/carreras-y-tecnicaturas/ingresantes">Link Inscripcion</a></li>
            <li className= 'contactos'><a href="https://www.fmed.uba.ar/carreras/medicina/informacion-general">Link Página carrera</a></li>
            <li className= 'contactos'>Mail consultas: diralumnos@fmed.uba.ar</li>
            <li className= 'contactos'>Telefono consultas: (+54) 11 5285-2800 </li>
				</div>
			</div>
		);
	}
}

export default Medicinacarrera;