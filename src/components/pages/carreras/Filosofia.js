
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Filosofia extends Component {
	state = {
		titulo: null,
		imagen: require('../../assets/humanidades/filosofiaimg.jpg'),
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
						<h2>Filosofía</h2>
						<p>
						La Filosofía es una disciplina que estudia y reflexiona constantemente sobre los enigmas constitutivos a la esencia del ser humano.
						</p>
						<li className= 'lista-de-info'>Sede Facultad de Filosofía y Letras: Puán 480, C1406CQJ, Ciudad Autónoma de Buenos Aires.</li>
						<li className= 'lista-de-info'>Duración estimada en años: 6</li>
					</div>
					<div className='col m6'>
					<img className= "imgcarreras" src={this.state.imagen} alt="imagen filosofia" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Filosofía, Historia, Ética y Ciudadanía
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Antes de elegir esta carrera o cualquiera, yo le diría que estudie una carrera que sea lo más parecido a lo que realmente le apasiona, lo que más le gusta hacer en su tiempo libre. Te tiene que gustar lo que estás haciendo porque si no lo disfrutamos no sirve. Tampoco recomiendo estudiar carreras por presión social o herencia familiar porque eso va a causar que sigas algo que no te guste y eso arruina al individuo. 

						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Hay que saber que la universidad es para pocos, es un esquema de estudio y de aprendizaje al que pocos sobreviven. No es para ir a perder el tiempo, no es para ir a tantear o probar, sino que tiene que entrar el que está decidido lo que va a hacer porque sino va a ir, hacer un año, y va a dejar. Terminar la carrera universitaria implica una gran, gran cuota de sacrificio, de renuncia a muchas cosas, de tratar de mantener las cosas estables, de no entrar en crisis o tratar de que las crisis no nos pasen por arriba, de mucho tiempo para todas las lecturas que se necesitan, y tolerar la frustración de cuando estudias mucho y te reprueban.

						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li><a href="http://www.uba.ar/download/academicos/carreras/lic-filosofia.pdf">Link plan de estudios</a></li>
            <li><a href="http://academica.filo.uba.ar/departamento-de-admisi%C3%B3n-matr%C3%ADcula-y-estad%C3%ADstica">Link inscripción</a></li>
            <li><a href="http://filosofia.filo.uba.ar/">Link página carrera</a></li>
            <li>Mail de consultas: mailto:defilo@filo.uba.ar</li>
            <li>Teléfono de consultas: (+54) 11 5287-2826</li>
				</div>
			</div>
		);
	}
}

export default Filosofia;