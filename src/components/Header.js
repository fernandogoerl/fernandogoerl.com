import React, { Component } from 'react'

import Logo from '../img/logo.03.green.gradient.png'

import { withStyles } from '@material-ui/styles'

import { colors, functions } from '../helpers'


class Header extends Component {

	componentDidMount() {
		functions.scrollTo('hero', this.event)
	}

	render() {
		const { classes, scroll } = this.props

		return (
			<header className={[classes.Header, (scroll > 100 ? classes.FixedPosition : classes.DefaultPosition)].join(' ')}>
				<div className={classes.LogoContainer}>
					<img src={Logo} className={classes.Logo} alt="logo" />
				</div>
				<div className={classes.Nav}>
					<a className={classes.Link} onClick={event => functions.scrollTo('hero', event)} href="#home" >Home</a>
					<a className={classes.Link} onClick={event => functions.scrollTo('experience', event)} href="#experience" >Experience</a>
					<a className={classes.Link} onClick={event => functions.scrollTo('education', event)} href="#education" >Education</a>
					<a className={classes.Link} onClick={event => functions.scrollTo('skills', event)} href="#skills" >Skills</a>
					<a className={classes.Link} onClick={event => functions.scrollTo('my_work', event)} href="#my_work" >My Work</a>
					<a className={classes.Link} onClick={event => functions.scrollTo('contact_me', event)} href="#contact_me" >Contact Me</a>
					{/* <Link className={classes.Link} to="/#aboutme" >About Me</Link> */}
				</div>


			</header>
		)
	}
}

const styles = {
	Header: {
		width: 'calc(100% - 40px)',
		// background-color: transparent
		height: 100,
		display: 'flex',
		alignItems: 'center',
		color: 'white',
		padding: 20,
		zIndex: 100,
	},
	FixedPosition: {
		backgroundColor: colors.bg,
		position: 'fixed',
		transition: 'background-color .5s ease, position .5s ease',
	},
	DefaultPosition: {
		backgroundColor: 'transparent',
		position: 'absolute',
		transition: 'background-color .5s ease',
	},
	Nav: {
		flex: 8,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	Link: {
		color: '#ffffff',
		fontWeight: 500,
		textTransform: 'none',
		textDecoration: 'none',
		margin: 20,
		'&::active': {
			color: 'red',
		},
	},
	LogoContainer: {
		flex: 2,
	},
	Logo: {
		// animation: '$App-logo-spin infinite 20s linear',
		height: 80,
	},

	'@keyframes App-logo-spin': {
		from: {
			transform: 'rotate(0deg)',
		},
		to: {
			transform: 'rotate(360deg)',
		}
	}
}

export default withStyles(styles)(Header)
