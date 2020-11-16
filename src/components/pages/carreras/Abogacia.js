
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Abogacia extends Component {
	state = {
		titulo: null,
    imagen: require('../../assets/sociales/abogaciaimg.jpg'),
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
						<h2>Abogacía</h2>
						<p>
							Un abogado es el profesional en Derecho que se dedica a brindar asesoría jurídica o que defiende o representa a una de las partes en un proceso judicial.
						</p>
            <li className= 'lista-de-info'>Sede Facultad de Derecho: Avda. Pte. Figueroa Alcorta 2263, C1425CKB, Ciudad Autónoma de Buenos Aires.</li>
						<li className= 'lista-de-info'>Carga horaria total: 2.665 hs</li>
						<li className= 'lista-de-info'>Duración estimada en años: 6</li>
						<li className= 'lista-de-info'>Título intermedio: Bachiller Universitario/a en Derecho</li>
						<li className= 'lista-de-info'>Título final: Abogado/a</li>
					</div>
					<div className='col m6'>
						<img src={this.state.imagen} alt="imagen abogacia" className="imgcarreras" />
					</div>
				</div>
				<hr />
				<div className='row'>
          <h4 className= 'opiniones'>¿Qué materias de secundaria son centrales para la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Ética y Ciudadanía.
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							En primer lugar, hay que tener ganas de ayudar a un otro que se ve perjudicado. En segundo lugar, se tiene que aceptar que al estar a disposición de un otro, es decir que vos sos un intermediario para que se “haga justicia”. Hay que aceptar y entender los intereses y formas de tu cliente a pesar de que no siempre estés de acuerdo.
						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Por el lado de la cursada, se va a tener que leer un montón. Fallos/resoluciones/códigos que se puede hacer un poco tedioso pero nos permite entender y ver la realidad social con otros ojos. Está buenísimo trabajar mientras se estudia porque se aprende de otra manera. Es muy diferente estudiar el “deber ser” con ver lo que pasa efectivamente en la realidad y además que trabajas con abogados generalmente con mucha experiencia y aprendes un montón.
						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li><a href="http://www.uba.ar/download/academicos/carreras/abogacia.pdf">Link plan de estudios</a></li>
            <li><a href="http://www.derecho.uba.ar/ingresantes/">Link inscripcion</a></li>
            <li><a href="http://www.uba.ar/download/academicos/carreras/abogacia.pdf">Link página de carrera</a></li>
            <li>Mail de consultas: estudiantiles@derecho.uba.ar</li>
            <li>Teléfono de consultas: (+54) 11 5287-7010/11 </li>
				</div>
			</div>
		);
	}
}

export default Abogacia;