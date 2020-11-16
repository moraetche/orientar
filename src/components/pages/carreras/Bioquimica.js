
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Bioquimica extends Component {
	state = {
		titulo: null,
    imagen: require('../../assets/medicina/bioquimicaimg.jpg'),
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
						<h2>Bioquímica</h2>
						<p>
							La Bioquímica es una ciencia básica dedicada al estudio de los constituyentes químicos de los seres vivos y a las transformaciones asociadas en el curso de la actividad vital.
						</p>
            <li className= 'lista-de-info'>Sede Facultad de Farmacia y Bioquímica: Junín 954/6, C1113AAD, Ciudad Autónoma de Buenos Aires.</li>
						<li className= 'lista-de-info'>Duración estimada en años: 5,5 años</li>
						<li className= 'lista-de-info'>Título final: Bioquímico/a</li>
					</div>
					<div className='col m6'>
						<img src={this.state.imagen} alt="imagen bioquímica" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Quimica y Biologia.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Hay que dedicarle mucho tiempo y es muy difícil trabajar a la misma vez.
						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Los teóricos son muy importantes.
						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li><a href="http://app.ffyb.uba.ar/doc/Esquema_Plan_Bioqu%C3%ADmica.pdf">Link plan de estudios</a></li>
            <li><a href="http://www.ffyb.uba.ar/ALUMNOS/ingresantes?es">Link inscripcion</a></li>
            <li><a href="http://www.ffyb.uba.ar/secretaria-academica/bioquimica-2586?es">Link página de carrera</a></li>
            <li>Mail consultas: defilo@filo.uba.ar</li>
            <li>Teléfono consultas: (+54) 11 5287-2826</li>
				</div>
			</div>
		);
	}
}

export default Bioquimica;