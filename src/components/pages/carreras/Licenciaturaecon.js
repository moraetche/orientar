
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Licenciaturaecon extends Component {
	state = {
		titulo: null,
		imagen: require('../../assets/economicas/economiaimg.jpg'),
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
						<h2>Licenciatura en economía</h2>
						<p>
						El Licenciado en Economía diseña e implementa políticas económicas, analiza el comportamiento de las variables macroeconómicas, evalúa y toma decisiones en los órganos ejecutivos de gobierno en temas económicos, como la elaboración del presupuesto de gobierno, finanzas del Estado, análisis de cuentas nacionales, estadísticas básicas, comercio exterior y tarifas.
						</p>
						<li className= 'lista-de-info'>Carga horaria total: 2.664</li>
						<li className= 'lista-de-info'>Duración estimada en años: 5,5</li>
						<li className= 'lista-de-info'>Título final: Licenciado/a en Economía</li>
						<li className= 'lista-de-info'>Facultad de Ciencias Exactas y Naturales: Intendente Güiraldes 2160,  Pabellón III, C1428EGA, Ciudad Autónoma de Buenos Aires.</li>
					</div>
					<div className='col m6'>
					<img className= "imgcarreras" src={this.state.imagen} alt="imagen economia" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Matemática, Economía.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Antes de elegir la carrera tenés que estar seguro que es una carrera que te gusta, porque una carrera promedio en la UBA atraviesa las 30-35 materias, que son 35 materias de las cuales algunas te van a gustar y otras no, y en esos momentos en que te vayan mal y estés cursando materias que no te gustan lo único que te va a ayudar a seguir adelante es saber que la carrera, la meta a la que queres llegar, te gusta. Después la salida laboral va a venir, no me preocuparía tanto por eso como por que te guste la carrera.
						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Lo más importante es tener en claro que en los primeros años de la UBA y en el CBC vas a ser 1 alumno entre 120 o 200, entonces vas a perder la familiaridad que tenías en la secundaria con tus compañeros y con los profesores. Eso a veces te va a hacer sentir solo, lo fundamental es tratar de resistir eso y con el tiempo uno se va a ir haciendo compañeros y amigos para estudiar con ellos si es que avanzan al mismo ritmo en la carrera, pero en un principio la UBA no es lo más amigable con eso.
Otro consejo muy importante es sobreponerse a la frustración. Va a haber frustraciones, va a haber materias en las que nos vaya mal y por ahí más de una vez o dos veces, materias y temas que no nos gusten y nos cuesten más, pero lo más importante es siempre seguir adelante y no frustrarse, no dejar las cosas, y siempre tener una motivación grande para estudiar lo que uno estudia, sino se hace muy difícil. Con motivación, con resiliencia y con resistencia a la frustración yo creo que se puede obtener cualquier cosa en la vida universitaria.

						</p>
					</div>
          <h6> Donde contactar: </h6>
		                <li className= 'contactos'><a href="http://www.uba.ar/download/academicos/carreras/lic-economia.pdf">Link plan de estudios</a></li>
						
						<li className= 'contactos'><a href="https://www.economicas.uba.ar/ingresantes/ingresantes-como-inscribirse/">Link Inscripcion</a></li>
						<li className= 'contactos'><a href="https://www.economicas.uba.ar/alumnos/economia/">Link Página carrera</a></li>
						<li className= 'contactos'>Mail consultas: consultas@fce.uba.ar</li>
						<li className= 'contactos'>Telefono consultas: (+54) 11 5285-7000 </li>
				</div>
			</div>
		);
	}
}

export default Licenciaturaecon;