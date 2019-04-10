import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';

import { colors, functions } from '../helpers'

import { FaArrowUp } from 'react-icons/fa'

export class BackToTop extends Component {
	render() {
		const { classes, scroll } = this.props
		return (
			<div className={[classes.root, (scroll < 600 ? classes.Hide : classes.Show)].join(' ')} onClick={event => functions.scrollTo('hero', event)}>
				<FaArrowUp />
			</div>
		)
	}
}

const styles = {
	root: {
		position: 'fixed',
		right: 20,
		zIndex: 100,
		backgroundColor: colors.lightPrimary,
		height: 40,
		width: 40,
		borderRadius: 40,
		fontSize: 40,
		padding: 15,
		cursor: 'pointer',
		transition: 'opacity .5s ease, bottom .5s, background-color .5s',
		'&:hover' : {
			backgroundColor: colors.primary,
			transition: 'background-color .5s',
		},
		'-webkit-box-shadow': '10px 10px 60px 16px rgba(0,0,0,0.75)',
		'-moz-box-shadow': '10px 10px 60px 16px rgba(0,0,0,0.75)',
		boxShadow: '10px 10px 60px 16px rgba(0,0,0,0.75)',
	},
	Hide: {
		bottom: -40,
		opacity: 0,
		transition: 'opacity .5s ease, bottom .5s',
	},
	Show: {
		bottom: 20,
		opacity: 1,
		transition: 'opacity .5s ease, bottom .5s',
	},
}

export default withStyles(styles)(BackToTop)
