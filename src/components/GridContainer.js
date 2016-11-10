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
							    	id={`x${i1}${i2}`}
							    	style={null}
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
	currentId: PropTypes.string.isRequired,
	updateId: PropTypes.func.isRequired
};