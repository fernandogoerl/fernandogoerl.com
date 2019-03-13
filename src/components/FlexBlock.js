import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

class FlexBlock extends Component {

	setSize = (size) => {
		const { classes } = this.props
		switch (size) {
			case 'small':
				return classes.Small
			case 'normal':
				return classes.Block
			case 'large':
				return classes.Large
			case 'full':
			case null:
				return classes.Full

			default:
				return classes.Full
		}
	}
	render() {
		const { children, key, size } = this.props
		return (
			<div key={key} className={this.setSize(size)}>
				{children}
			</div>
		)
	}
}

const styles = {
	Full: {
		marginLeft: 20,
		marginRight: 20,
	},
	Large: {
		flex: 1,
		minWidth: 400,
		marginLeft: 20,
		marginRight: 20,
		'@media (min-width: 1350px)': {
			maxWidth: 500,
		},
		'@media (min-width: 800px) and (max-width: 1350px)': {
			minWidth: 760,
			maxWidth: 900,
		},
	},
	Block: {
		flex: 1,
		minWidth: 500,
		marginLeft: 20,
		marginRight: 20,
	},
	Small: {
		flex: 1,
		minWidth: 250,
		marginLeft: 20,
		marginRight: 20,
		'@media (min-width: 1320px)': {
			maxWidth: 500,
		},
	},
}

export default withStyles(styles)(FlexBlock)
