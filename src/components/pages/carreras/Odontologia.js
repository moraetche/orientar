
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Odontologia extends Component {
	state = {
		titulo: null,
		imagen: require('../../assets/medicina/odontologiaimg.jpg'),
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
						<h2>Odontología</h2>
						<p>
						La odontología también denominada estomatología, es una especialidad de la Medicina que se ocupa de la prevención, el diagnóstico y tratamiento de las enfermedades que afectan a cualquier parte de la estructura mandibular.
						</p>
						<li className= 'lista-de-info'>Carga horaria total: 5522</li>
						<li className= 'lista-de-info'>Duración estimada en años: 6</li>
						<li className= 'lista-de-info'>Título final: Odontólogo/a</li>
						<li className= 'lista-de-info'>Facultad de Odontología: Marcelo T. de Alvear 2142, C1122AAH Ciudad Autónoma de Buenos Aires.</li>
						
					</div>
					<div className='col m6'>
					<img className= "imgcarreras" src={this.state.imagen} alt="imagen odontologia" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Biología.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Le diría que lea el plan de estudios, ya que no son materias que son parecidas a las de secundaria. También que si tiene la oportunidad de charlar con algún odontólogo lo haga, y que siga el instagram del centro de estudiantes ya que ahí siempre suben información importante.
						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Mi consejo es que nunca hay que bajar los brazos, darse por vencido y creer que uno no puede. La facultad es un gran momento de aprendizaje personal y académico. También que el CBC no tiene nada que ver con la carrera después
						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li className= 'contactos'><a href="http://odontologia.uba.ar/?page_id=2649#planestudios">Link plan de estudios</a></li>
						
            <li className= 'contactos'><a href="http://odontologia.uba.ar/?page_id=166">Link Inscripcion</a></li>
            <li className= 'contactos'><a href="http://odontologia.uba.ar/?page_id=2649">link Página carrera</a></li>
            <li className= 'contactos'>Mail consultas: info@odontologia.uba.ar</li>
            <li className= 'contactos'>Telefono consultas: (54) 11 5287-6000</li>
				</div>
			</div>
		);
	}
}

export default Odontologia;