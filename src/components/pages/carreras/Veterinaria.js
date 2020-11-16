
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Veterinaria extends Component {
	state = {
		titulo: null,
		imagen: require('../../assets/medicina/veterinariasimg.jpg'),
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
						<h2>Ciencias veterinarias</h2>
						<p>
						Ciencia médica que se dedica a prevenir, diagnosticar y curar las enfermedades de los animales. Así como también heridas y lesiones provocadas por diversos factores.
						</p>
						<li className= 'lista-de-info'>Duración estimada en años: 7</li>
						<li className= 'lista-de-info'>Titulo Final: Veterinario/a</li>
						<li className= 'lista-de-info'>Facultad de Ciencias Veterinarias: Chorroarín 280, C1427CWO, Ciudad Autónoma de Buenos Aires.</li>
						
					</div>
					<div className='col m6'>
					<img className= "imgcarreras" src={this.state.imagen} alt="imagen veterinaria" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
						<div className='circle'></div>
						<li className= 'punteo'>
						Química y Biología.
						</li>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
						<div className='circle'></div>
						<li className= 'punteo'>
						Hay que  tener en cuenta que la salida laboral es muy variada, desde clínica de animales pequeños, grandes, animales silvestres, producción, investigación e incluso salud pública y más.
Es una carrera hermosa de estudiar, con materias muy diversas y de diferente complejidad

						</li>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
						<div className='circle'></div>
						<li className= 'punteo'>
						Vas a poder, relajá que todo se aprende, y se aprende a estudiar que a veces es lo más difícil. Es importante entender que se pueden cometer errores y no hay frustrarse rápido y encontrar un grupo de estudio es clave, ayuda a estudiar y a pasar mucho mejor el tiem
						</li>
					</div>
          <h6> Donde contactar: </h6>
                        
						<li className= 'contactos'> mail consultas: informes@fvet.uba.ar</li>
						<li className= 'contactos'>Telefono consultas: (+54) 11 5287-2000</li>
						<li className= 'contactos'><a href="http://www.uba.ar/download/academicos/carreras/csveterinarias.pdf">Link plan de estudios </a></li>
						<li className= 'contactos'><a href="http://www.fvet.uba.ar/?q=ingresantesRequisitos#ing_vet">Link inscrpccion</a></li>
						<li className= 'contactos'><a href="http://www.fvet.uba.ar/?q=carrerasGrado#veterinaria">Link pagina carrera</a></li>
						
				</div>
			</div>
		);
	}
}

export default Veterinaria;