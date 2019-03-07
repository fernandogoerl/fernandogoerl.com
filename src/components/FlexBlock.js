import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

class FlexBlock extends Component {
	render() {
		const { classes, children, key } = this.props
		return (
			<div key={key} className={classes.Block}>
				{children}
			</div>
		)
	}
}

const styles = {
	Block: {
		flex: 1,
		minWidth: 400,
		marginLeft: 20,
		marginRight: 20,
		'@media (min-width: 1320px)': {
			maxWidth: 500,
		},
		'@media (min-width: 800px) and (max-width: 1320px)': {
			minWidth: 760,
		},
	},
}

export default withStyles(styles)(FlexBlock)
