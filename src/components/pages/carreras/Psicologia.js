
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Psicologia extends Component {
	state = {
		titulo: null,
		imagen: require('../../assets/humanidades/psicologiaimg.jpg'),
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
						<h2>Psicología</h2>
						<p>
						La carrera de Psicología forma profesionales capaces de estudiar, comprender y analizar los actos,conductas y procesos mentales normales y anormales del ser humano por medio de la observación de sus acciones, reacciones, decisiones, comportamiento verbal, movimiento corporal y otros eventos observables así como mediante la aplicación de instrumentos científicos, para llegar a conclusiones y brindar diagnósticos y soluciones a problemas.
						</p>
						<li className= 'lista-de-info'>Duración estimada en años: 6</li>
						<li className= 'lista-de-info'>Titulo Final: Licenciado/a en Psicología</li>
						<li className= 'lista-de-info'>Facultad de Psicología: Av. Independencia 3065, C1225AAM, Ciudad Autónoma de Buenos Aires.</li>

						
					</div>
					<div className='col m6'>
					<img className= "imgcarreras" src={this.state.imagen} alt="imagen psicologia" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Filosofía, Biología, Psicología.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Lo importante es seguir el propio deseo y no el de la familia, de tu padres, de tus amigos, o lo que te de plata, no va por ahí. Hay que pensar bien qué es lo que uno desea y espera en la vida, y lo que lo hace feliz. Tenés que elegir algo que cuando te sientes a estudiar digas que copado lo que estoy estudiando o te guste lo que estás haciendo, ya que sino cualquier carrera se hace el doble de difícil.
En la UBA nadie te está detrás avisándote de nada, entonces siempre hay que estar atento a todo y ser autodidacta.

						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
						Hay que poner mucho de uno mismo, probablemente fracasen, y más en la UBA, y no está mal por lo que no hay que frustrarse. Siempre hay que tener en la cabeza el objetivo y que aunque cueste mucho va a valer la pena.
El CBC lo pasa el 60%, y ese 40% que no lo pasa no es porque no es inteligente, sino porque no persevera. Un 3 o un 2 no define nuestra inteligencia así que a no frustrarse y a esforzarse mucho.

						</p>
					</div>
          <h6> Donde contactar: </h6>
		  <li className= 'contactos'> mail consultas: soe@psi.uba.ar</li>
						<li className= 'contactos'>Telefono consultas: (+54) 11 5287-3200</li>
            <li className= 'contactos'><a href="http://www.uba.ar/download/academicos/carreras/lic-psicologia.pdf">Link plan de estudios</a></li>
						
            <li className= 'contactos'><a href="http://www.psi.uba.ar/estudiantes.php?var=tramites_administrativos/ingreso/index.php">Link Inscripcion</a></li>
            <li className= 'contactos'><a href="http://www.uba.ar/download/academicos/carreras/abogacia.pdf">Link Página carrera</a></li>
            
				</div>
			</div>
		);
	}
}

export default Psicologia;