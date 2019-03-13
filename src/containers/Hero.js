import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'

import { colors, customTheme, functions } from '../helpers'

import ImageHero from '../img/image.hero.png'

class Hero extends Component {
	render() {
		const { classes, id } = this.props
		return (
			<div className={classes.Container} id={id}>
				<div className={classes.BGOverlay}></div>
				<div className={classes.TextContainer}>
					<h2 className={classes.Title}>
						<span className={classes.Primary}>{'<b>'}</span>
						Hello
						<span className={classes.Primary}>{'</b>'}</span>
						<br/>
						<span className={classes.Primary}>I’m Fernando, </span>
						Front&#8209;End
						<br/>
						Web Developer
					</h2>
					<div>If you want to hire me</div>
					<a className={classes.ScrollDownButton} onClick={event => functions.scrollTo('contact', event)} href="#contact" >
						<span className={classes.Primary}>Scroll down</span>
						<br/>
						<span className={classes.Arrow}>&darr;</span>
					</a>
				</div>

				<div className={classes.ImageContainer}>
					<div className={classes.ImageBackground}></div>
					<img src={ImageHero} className={classes.ImageHero} alt="logo" />
				</div>
			</div>
		)
	}
}

const styles = theme => ({
	Container: {
		paddingTop: '10vh',
		alignSelf: 'center',
		maxWidth: customTheme.containerWidth,
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		minHeight: '90vh',
		'@media (max-width: 1500px)': {
			paddingLeft: 100,
			paddingRight: 100,
		},
	},
	BGOverlay: {
		backgroundColor: colors.lightbg,
		height: '100vh',
		width: '30vw',
		zIndex: -20,
		position: 'absolute',
		right: 0,
		top: 0,
		// '@media (max-width: 1420px)': {
		// 	height: '600px'
		// },

	},
	TextContainer: {
		flex: 5,
		minWidth: 600,
	},
	Title: {
		fontSize: 75,
		minWidth: 500,
		wordWrap: 'normal',
	},
	Primary: {
		color: colors.lightPrimary,
	},
	ImageContainer: {
		flex: 3,
		padding: 50,
		'@media (max-width: 1450px)': {
			display: 'none',
		},
	},
	ImageBackground: {
		height: 700,
		backgroundColor: colors.bg,
		zIndex: -10,
		marginBottom: -725,
		marginRight: -25,
		marginLeft: 25,
	},
	ImageHero: {
		height: 700,
		'@media (max-width: 1420px)': {
			height: 1000,
		},
	},
	Bold: {
		fontWeight: 600,
	},
	ScrollDownButton: {
		paddingTop: 5,
		textTransform: 'none',
		textDecoration: 'none',
		display: 'inline-block',
		color: colors.white,
		'&:hover': {
			color: colors.lightPrimary,
			cursor: 'pointer',
		},
	},
	Arrow: {
		color: 'inherit',
		paddingLeft: 20,
		fontSize: '3em',
	},
})

export default withStyles(styles)(Hero)