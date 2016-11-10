import React, { Component, PropTypes } from 'react';

export default class Grid extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		const toggleTile = (this.props.className === 'tile') ? 'tile whiteTile' : 'tile';
		this.props.className = toggleTile;
		this.setState(this.state);
	}

	render() {
		return (
			<td
				className={this.props.className}
				ref="xTile"
				onClick={this.toggle}
			/>
		);
	}
}

Grid.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};