import React, { Component, PropTypes } from 'react';

export default class Grid extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		const toggleTile = (this.props.className === 'tile') ? 'tile whiteTile' : 'tile';
		const col = this.props.col;
		const row = this.props.row;

		this.props.className = toggleTile;
		this.props.pushToRow(col, row);
		this.props.updateCurrentTile(col, row);
		this.setState(this.state);
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
	pushToRow: PropTypes.func.isRequired,
	col: PropTypes.number.isRequired,
	row: PropTypes.number.isRequired,
	updateCurrentTile: PropTypes.func.isRequired,
	rows: PropTypes.array.isRequired
};