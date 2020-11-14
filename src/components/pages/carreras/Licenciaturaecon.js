
import React, { Component } from 'react';
import '../../css/carreras.css';
// import M from 'materialize-css'
export class Licenciaturaecon extends Component {
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
						<h2>Licenciatura en economía</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam cupiditate delectus labore ratione
							eaque laudantium, in nisi est
						</p>
						<li className= 'lista-de-info'>Item 1</li>
						<li className= 'lista-de-info'>Item 2</li>
						<li className= 'lista-de-info'>Item 3</li>
						<li className= 'lista-de-info'>Item 4</li>
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
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quas ipsam quo architecto libero
							temporibus? Nihil vitae ex accusantium ab rerum magnam, aut, hic assumenda, modi possimus nam fuga in?
						</p>
					</div>
          <h4 className= 'opiniones'>¿Qué te hubiera gustado saber antes de empezar/elegir la carrera?/Que le dirías a alguien antes de elegir la carrera?</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quas ipsam quo architecto libero
							temporibus? Nihil vitae ex accusantium ab rerum magnam, aut, hic assumenda, modi possimus nam fuga in?
						</p>
					</div>
          <h4 className= 'opiniones'>Consejo para los que empiezan</h4>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quas ipsam quo architecto libero
							temporibus? Nihil vitae ex accusantium ab rerum magnam, aut, hic assumenda, modi possimus nam fuga in?
						</p>
					</div>
          <h6> Donde contactar: </h6>
            <li className= 'contactos'>Item 1</li>
						<li className= 'contactos'>Item 2</li>
						<li className= 'contactos'>Item 3</li>
						<li className= 'contactos'>Item 4</li>
				</div>
			</div>
		);
	}
}

export default Licenciaturaecon;