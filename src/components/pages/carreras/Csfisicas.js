
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Csfisicas extends Component {
	state = {
		titulo: null,
    imagen: require('../../assets/exactas/fisicaimg.jpg'),
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
						<h2>Ciencias físicas</h2>
						<p>
							La Física tiene como objetivo principal comprender, teorizar y experimentar sobre el universo y los diferentes fenómenos que en él se manifiestan.
						</p>
            <li className= 'lista-de-info'>Sede Facultad de Ciencias Exactas y Naturales: Intendente Güiraldes 2160,  Pabellón III, C1428EGA, Ciudad Autónoma de Buenos Aires. Ciudad Universitaria.</li>
						<li className= 'lista-de-info'>Duración estimada en años: 6</li>
						<li className= 'lista-de-info'>Título intermedio: Asistente de Investigación en Física</li>
						<li className= 'lista-de-info'>Título final: Profesorado en Ciencias Físicas</li>
					</div>
					<div className='col m6'>
						<img src={this.state.imagen} alt="imagen ciencias fisicas" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<li className= 'punteo'>
						Matemática y Física
						</li>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<li className= 'punteo'>
							No conseguimos cursante que pueda proveer esta información.
						</li>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<li className= 'punteo'>
							No conseguimos cursante que pueda proveer esta información.
						</li>
					</div>
          <h6> Donde contactar: </h6>
            <li><a href="https://www.df.uba.ar/es/futuros-estudiantes/guia-para-el-estudiante">Link plan de estudios</a></li>
            <li><a href="https://exactas.uba.ar/inscripcion-ingresantes/">Link inscripción</a></li>
            <li><a href="https://exactas.uba.ar/ensenanza/carreras-de-grado/ciencias-fisicas/">Link página de carrera</a></li>
            <li>Mail de consultas: mailto:academ@df.uba.ar</li>
            <li>Teléfono de consultas: (+54) 11 5285-7565/7566</li>
				</div>
			</div>
		);
	}
}

export default Csfisicas;