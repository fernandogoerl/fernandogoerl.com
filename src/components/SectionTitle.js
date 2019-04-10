import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'

import { colors }  from '../helpers'


class SectionTitle extends Component {
	render() {
		const { name, align, classes } = this.props
		return (
			<div className={[classes.SectionTitle, (align === 'right' ? classes.Right : classes.Left )].join(' ')}>
				{`<${name}>`}
			</div>
		)
	}
}



const styles = {
	SectionTitle: {
		fontSize: 180,
		fontWeight: 600,
		color: colors.lightbg,
		zIndex: -10,
		marginBottom: -30,
		'@media (max-width: 1500px)': {
			fontSize: 120,
		},
		'@media (max-width: 1200px)': {
			fontSize: 120,
		},
		'@media (max-width: 800px)': {
			fontSize: 90,
		},
		'@media (max-width: 600px)': {
			fontSize: 70,
		},
		'@media (max-width: 500px)': {
			fontSize: 50,
		},
	},
	Left: {
		textAlign: 'left',
	},
	Right: {
		textAlign: 'right',
	},
}

export default withStyles(styles)(SectionTitle)
