
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Politicas extends Component {
	state = {
		titulo: null,
		imagen: require('../../assets/sociales/politicasimg.jpg'),
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
						<h2>Ciencias políticas</h2>
						<p>
						La Ciencia Política es una ciencia social que se aboca al estudio y el análisis de las relaciones de poder, implícitas o explícitas, entre la autoridad y los individuos, los grupos, y las organizaciones; y las estructuras, procedimientos y procesos a través de los cuales se llega a las decisiones políticas y se desarrollan las interacciones entre los diferentes sistemas políticos.
						</p>
						<li className= 'lista-de-info'>Duración estimada en años: 5</li>
						<li className= 'lista-de-info'>Titulo Final: Licenciado/a en Ciencia Política</li>
						<li className= 'lista-de-info'>Facultad de Ciencias Sociales: Santiago del Estero 1029, C1075AAU, Ciudad Autónoma de Buenos Aires.</li>
						
					</div>
					<div className='col m6'>
					<img className= "imgcarreras" src={this.state.imagen} alt="imagen politica" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Teoría política, teoría sociológica, historia.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						La cantidad de bibliografía que iba a haber.

						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						No atrasarse con las lecturas, prestar atención a lo que los profesores consideran clave
						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li><a href="http://www.uba.ar/download/academicos/carreras/lic-psicologia.pdf">Link plan de estudios</a></li>
						
            <li className= 'contactos'><a href="http://www.sociales.uba.ar/ingresantes/">Link Inscripcion</a></li>
            <li className= 'contactos'><a href="http://www.sociales.uba.ar/carreras/ciencia-politica/">Link Página carrera</a></li>
			<li className= 'contactos'> mail consultas: polit@sociales.uba.ar</li>
			<li className= 'contactos'>Telefono consultas: (+54) 11 5287-1500 Int. 71774</li>
				</div>
			</div>
		);
	}
}

export default Politicas;