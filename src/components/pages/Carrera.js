
import React, { Component } from 'react';
import '../css/carreras.css';
// import M from 'materialize-css'
export class Carrera extends Component {
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
						<h2 className='blue-text text-darken-2'>{this.props.match.params.carrera}</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam cupiditate delectus labore ratione
							eaque laudantium, in nisi est
						</p>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</div>
					<div className='col m6'>
						<img className='right' src='https://picsum.photos/300' alt='' />
					</div>
				</div>
				<hr />
				<div className='row'>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quas ipsam quo architecto libero
							temporibus? Nihil vitae ex accusantium ab rerum magnam, aut, hic assumenda, modi possimus nam fuga in?
						</p>
					</div>
					<div className='punteo'>
						<div className='circle'></div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quas ipsam quo architecto libero
							temporibus? Nihil vitae ex accusantium ab rerum magnam, aut, hic assumenda, modi possimus nam fuga in?
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Carrera;