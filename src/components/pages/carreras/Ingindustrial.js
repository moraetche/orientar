
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Ingindustrial extends Component {
	state = {
		titulo: null,
		imagen: require('../../assets/ingenieria/industrialimg.jpg'),
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
						<h2>Ingeniería industrial</h2>
						<p>
						La Ingeniería Industrial es por definición la rama de las ingenierías encargada del análisis, interpretación, comprensión, diseño, programación y control de sistemas productivos y logísticos con miras a gestionar, implementar y establecer estrategias de optimización con el objetivo de lograr el máximo rendimiento de los procesos de creación de bienes y/o la prestación de servicios.
						</p>
						<li className= 'lista-de-info'>Carga horaria total: 4528</li>
						<li className= 'lista-de-info'>Duración estimada en años: 6</li>
						<li className= 'lista-de-info'>Título final: Ingeniero/a Industrial</li>
						<li className= 'lista-de-info'>Facultad de Ingeniería:Paseo Colón 850, C1063ACV, Ciudad Autónoma de Buenos Aires.</li>
						<li className= 'lista-de-info'>Facultad de Ingeniería:Intendente Güiraldes 2160, Pabellón III, C1428EGA, Ciudad Autónoma de Buenos Aires.</li>
						<li className= 'lista-de-info'>Facultad de Ingeniería:Av. Las Heras 2214, C1127AAR, Ciudad Autónoma de Buenos Aires.</li>
					</div>
					<div className='col m6'>
					<img className= "imgcarreras" src={this.state.imagen} alt="industrial" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<li className= 'punteo'>
						Matemática, Física, Química
						</li>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<li className= 'punteo'>
						Preparate para aprender de todas las áreas, si sos una persona que quiere entender de todo un poco, estás en el lugar correcto. Ingeniería industrial te va a abrir las puertas para más adelante poder especializarte y/o adentrarte en (casi) lo que quieras. El ingeniero o la ingeniera industrial está diseñad@ para tener puestos altos en rango, de liderazgo, y por lo tanto debe entender todo lo que ocurre en cada sector de su negocio o empresa.
Sin embargo, estás eligiendo una carrera de ingeniería, no es nada en comparación con lo que viviste en la secundaria (y tampoco el CBC, si es que finalizaste esa etapa). Para poder llevar a cabo una carrera de este estilo, vas a tener que estar segur@ que este es tu lugar, que esto es lo que te gusta, y que vas a estar dispuest@ a dar el esfuerzo extra cuando tod@s a tu alrededor pasan su carrera sin transpirar. No es tu caso, bienvenid@ a ingeniería.

						</li>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<li className= 'punteo'>
						Movete, no te dejes estar. Es casi indispensable que consigas contactos que ya están más avanzad@s en la carrera, no tengas miedo de preguntarles todo, ell@s tuvieron que hacer lo mismo. Encontrar un grupo de gente que tenga tu ritmo de estudio y tu velocidad te va a ayudar a pasar la carrera mucho más fácil.
Es muy importante que no te compares todo el tiempo, siempre va a haber gente que "ya tiene todo estudiado/sabido", que te sirva como motivación para dar el esfuerzo extra.
La primera parte de la carrera es LEJOS la más difícil, ayudate de apuntes, de resueltos (¡chequeá que estos sean correctos!) y de lo que tengas disponible. Organizate bien, y si no sos una persona ordenada, amigate de alguien que lo sea. PRIORIZAR CATEDRA ANTES QUE HORARIOS siempre que sea posible.
Estudiar todos los días no es una mala idea, estar al día con Ingeniería es muy difícil, pero te asegurás ser del 5% que no se queda atrás ni deja la carrera en los primeros años.

						</li>
					</div>
          <h6> Donde contactar: </h6>
		                <li className= 'contactos'><a href="http://www.fi.uba.ar/sites/default/files/Ingenieria%20Industrial%202011%20Modificacion%202018%20actualizacion%202019-.pdf">Link plan de estudios</a></li>
						
						<li className= 'contactos'><a href="http://www.fi.uba.ar/es/node/744">Link Inscripcion</a></li>
						<li className= 'contactos'><a href="http://www.fi.uba.ar/es/node/216">Link Página carrera</a></li>
						<li className= 'contactos'>Mail consultas: academica@fi.uba.ar</li>
						<li className= 'contactos'>Telefono consultas: (+54) 11 5285-0400/01</li>
				</div>
			</div>
		);
	}
}

export default Ingindustrial;