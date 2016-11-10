import React, { Component } from 'react';
import GridContainer from './GridContainer';
import './Home_style.css';

export default class Home extends Component {
	constructor() {
		super();

		this.state = {
			currentId: ''
		};

		this.updateId = this.updateId.bind(this);
	}

	updateId(id) {
		this.setState({ currentId: id });
	}

	render() {
		return (
			<div>
				<h1 className="title">Conway's Game of Life</h1>
				<GridContainer
					currentId={this.state.currentId}
					updateId={this.updateId}
				/>
			</div>
		);
	}
}