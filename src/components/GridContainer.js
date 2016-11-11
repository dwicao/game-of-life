import React, { Component, PropTypes } from 'react';
import Grid from './Grid';

export default class GridContainer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const xtr = 35;
		const xtd = 35;
		return (
			<table className="grid">
				<tbody>
					{[...Array(xtr)].map((_, i1) =>
						<tr>
							{[...Array(xtd)].map((_, i2) =>
							    <Grid
							    	className="tile"
							    	id={`${i1}x${i2}`}
							    	col={i1}
							    	row={i2}
							    	pushToRow={this.props.pushToRow}
							    	updateCurrentTile={this.props.updateCurrentTile}
							    	rows={this.props.rows}
							    />
							)}
						</tr>
					)}
				</tbody>
			</table>
		);
	}
}

GridContainer.propTypes = {
	updateCurrentTile: PropTypes.func.isRequired,
	pushToRow: PropTypes.func.isRequired,
	rows: PropTypes.array.isRequired
};