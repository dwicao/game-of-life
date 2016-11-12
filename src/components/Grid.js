import React, { Component, PropTypes } from 'react';

export default class Grid extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		const col = this.props.col;
		const row = this.props.row;
		const toggleGrid = (this.props.grid[col][row] === 1) ? 0 : 1;
		const toggleTile = (this.props.className === 'tile') ? 'tile whiteTile' : 'tile';

		this.props.className = toggleTile;
		this.props.grid[col][row] = toggleGrid;
		this.setState(this.state);

		console.log('col:', col, 'row:', row);
		console.log(this.props.grid[col][row]);
		console.log(this.props.grid);
	}

	render() {
		return (
			<td
				ref="xTile"
				className={this.props.className}
				onClick={this.toggle}
			/>
		);
	}
}

Grid.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	col: PropTypes.number.isRequired,
	row: PropTypes.number.isRequired,
	grid: PropTypes.array.isRequired
};