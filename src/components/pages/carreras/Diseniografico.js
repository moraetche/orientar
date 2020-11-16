
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Diseniografico extends Component {
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
						<h2>Diseño gráfico</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam cupiditate delectus labore ratione
							eaque laudantium, in nisi est
						</p>
						<li className= 'lista-de-info'>Sede Facultad de Arquitectura, Diseño y Urbanismo: Intendente Güiraldes 2160,  Pabellón III, C1428EGA, Ciudad Autónoma de Buenos Aires. Ciudad Universitaria.</li>
						<li className= 'lista-de-info'>Carga horaria total: 2.852 hs</li>
						<li className= 'lista-de-info'>Duración estimada en años: 5</li>
						<li className= 'lista-de-info'>Título final: Diseñador Gráfico / Diseñadora Gráfica</li>
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
							Diseño, Morfología y Tipografía.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Lo cara que iba a ser.
						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Arranca con los trabajos siempre lo antes posible, mantené el trabajo clase a clase porque hace la diferencia a la hora de la entrega, y no tengas miedo de innovar.
						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li><a href="http://www.fadu.uba.ar/categoria/246-nuevo-plan">Link plan de estudios</a></li>
            <li><a href="http://www.fadu.uba.ar/categoria/50-diseo-grfico">Link página de carrera:</a></li>
            <li>Mail de consultas: disgraf@fadu.uba.ar</li>
            <li>Teléfono de consultas: (+54) 11 5285-9200</li>
				</div>
			</div>
		);
	}
}

export default Diseniografico;