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
			case 'even':
				return classes.EvenNumbers
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
		minWidth: 300,
		marginLeft: 20,
		marginRight: 20,
		'@media (min-width: 1350px)': {
			minWidth: 400,
			maxWidth: 500,
		},
		'@media (min-width: 800px) and (max-width: 1350px)': {
			minWidth: 760,
			maxWidth: 900,
		},
	},
	Block: {
		flex: 1,
		marginLeft: 20,
		marginRight: 20,
		'@media (min-width: 500px)': {
			minWidth: 500,
		},
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
	EvenNumbers: {
		marginLeft: 20,
		marginRight: 20,
		'@media (min-width: 1200px) and (max-width: 1480px)': {
			minWidth: 500,
		},
		'@media (min-width: 450px) and (max-width: 1200px)': {
			width: 400,
		},
		'@media (max-width: 1000px)': {
			width: 370,
		},
		'@media (max-width: 400px)': {
			margin: 0,
		},
	},
}

export default withStyles(styles)(FlexBlock)
