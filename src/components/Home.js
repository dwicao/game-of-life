import React, { Component } from 'react';
import GridContainer from './GridContainer';
import './Home_style.css';

export default class Home extends Component {
	constructor() {
		super();

		this.state = {
			currentCol: 0,
			currentRow: 0,
			rows: []
		};

		this.updateCurrentTile = this.updateCurrentTile.bind(this);
		this.pushToRow = this.pushToRow.bind(this);
	}

	updateCurrentTile(col, row) {
		this.setState({
			currentCol: col,
			currentRow: row
		});
	}

	pushToRow(col, row) {
		this.setState({ rows: this.state.rows.concat([[...Array(35)].map(e => e = false)]) });
	}

	render() {
		console.log( this.state.rows );
		return (
			<div>
				<h1 className="title">Conway's Game of Life</h1>
				<GridContainer
					updateCurrentTile={this.updateCurrentTile}
					pushToRow={this.pushToRow}
					rows={this.state.rows}
				/>
			</div>
		);
	}
}