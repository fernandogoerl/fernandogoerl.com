import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';

import { colors } from '../helpers'

export class Button extends Component {

	setButtonType = (type) => {
		const { classes } = this.props
		switch (type) {
			case 'primary':
				return classes.Primary
			case 'secondary':
				return classes.Secondary

			default:
				return classes.Primary
		}
	}

	render() {
		const { type, link, text, withArrow, classes } = this.props
		return (
			<a className={[classes.root, this.setButtonType(type)].join(' ')} href={link}>{text} <span className={withArrow ? classes.Arrow : classes.Hide}>&rarr;</span></a>
		)
	}
}

const styles = {
	root: {
		display: 'inline-block',
		margin: 20,
		padding: '15px 20px',
		border: `2px solid ${colors.lightPrimary}`,
		borderRadius: 5,
		textDecoration: 'none',
		fontSize: 18,
		fontWeight: 400,
		'&:hover': {
			color: colors.white,
			backgroundColor: colors.primary,
			border: `2px solid ${colors.primary}`,
			marginLeft: 23,
			marginRight: 17,
			marginTop: 23,
			marginBottom: 17,
		},
	},
	Primary: {
		color: colors.white,
		backgroundColor: colors.lightPrimary,
	},
	Secondary: {
		color: colors.lightPrimary,
		backgroundColor: 'transparent',
	},
	Arrow: {
		fontSize: 28,
		lineHeight: 0.1,
	},
	Hide: {
		display: 'none',
	}
}

export default withStyles(styles)(Button)
