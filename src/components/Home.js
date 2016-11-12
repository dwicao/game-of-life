import React, { Component } from 'react';
import GridContainer from './GridContainer';
import './Home_style.css';

export default class Home extends Component {
	constructor() {
		super();

		const initialGrid = [...Array(35)].map( () => [...Array(35)].map(val => val = 0) );

		this.state = {
			currentCol: 0,
			currentRow: 0,
			grid: initialGrid
		};

	}

	render() {
		console.log( 'rows', this.state.grid );
		return (
			<div>
				<h1 className="title">Conway's Game of Life</h1>
				<GridContainer
					grid={this.state.grid}
				/>
			</div>
		);
	}
}