import React, { Component } from 'react'

import Logo from '../img/logo.03.green.gradient.png'

import { withStyles } from '@material-ui/styles'

import { colors, functions } from '../helpers'


class Header extends Component {

	state = {
		isOpen: false,
	}

	componentDidMount() {
		functions.scrollTo('hero', this.event)
	}

	toggleMenu = () => {
		const { isOpen } = this.state
		this.setState({isOpen: !isOpen})
	}

	render() {
		const { classes, scroll } = this.props
		const { isOpen } = this.state

		return (
			<header className={[classes.Header, (scroll > 50 ? classes.AfterScroll : classes.DefaultPosition)].join(' ')}>
				<div className={classes.LogoContainer}>
					<img src={Logo} className={[classes.Logo, (scroll > 50 ? classes.LogoAfterScroll : '')].join(' ')} alt="logo" />
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
				<div className={classes.MobileNav}>
					<div className={classes.NavIcon} onClick={() => this.toggleMenu()}>
						<span className={[classes.IconLine, classes.LineTop, (isOpen ? classes.LineTopOpen : '')].join(' ')}></span>
						<span className={[classes.IconLine, classes.LineMiddle, (isOpen ? classes.LineMiddleOpen : '')].join(' ')}></span>
						<span className={[classes.IconLine, classes.LineBottom, (isOpen ? classes.LineBottomOpen : '')].join(' ')}></span>
					</div>
					<div className={[classes.MobileMenu, (isOpen ? classes.OpenedMenu : classes.Hide)].join(' ')}>
						<a className={classes.Link} onClick={event => {functions.scrollTo('hero', event); this.toggleMenu()}} href="#home" >Home</a>
						<a className={classes.Link} onClick={event => {functions.scrollTo('experience', event); this.toggleMenu()}} href="#experience" >Experience</a>
						<a className={classes.Link} onClick={event => {functions.scrollTo('education', event); this.toggleMenu()}} href="#education" >Education</a>
						<a className={classes.Link} onClick={event => {functions.scrollTo('skills', event); this.toggleMenu()}} href="#skills" >Skills</a>
						<a className={classes.Link} onClick={event => {functions.scrollTo('my_work', event); this.toggleMenu()}} href="#my_work" >My Work</a>
						<a className={classes.Link} onClick={event => {functions.scrollTo('contact_me', event); this.toggleMenu()}} href="#contact_me" >Contact Me</a>
					</div>
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
		zIndex: 200,
		position: 'fixed',
		'@media (max-width: 981px)': {
			padding: '10 20',
		},
	},
	AfterScroll: {
		height: 60,
		backgroundColor: colors.bg,
		transition: 'background-color .2s ease, height .2s ease',
	},
	DefaultPosition: {
		backgroundColor: 'transparent',
		transition: 'background-color .2s ease',
	},
	Nav: {
		flex: 8,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		'@media (max-width: 980px)': {
			display: 'none',
		},
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
		zIndex: 999,
	},
	Logo: {
		// animation: '$App-logo-spin infinite 20s linear',
		height: 80,
		transition: 'height .2s ease',
		'@media (max-width: 981px)': {
			height: 60,
		},
	},
	LogoAfterScroll: {
		// animation: '$App-logo-spin infinite 20s linear',
		height: 40,
		transition: 'height .2s ease',
	},
	'@keyframes App-logo-spin': {
		from: {
			transform: 'rotate(0deg)',
		},
		to: {
			transform: 'rotate(360deg)',
		}
	},
	MobileNav: {
		'@media (min-width: 981px)': {
			display: 'none',
		},
	},
	NavIcon: {
		width: 40,
		zIndex: 999,
		height: 25,
		position: 'relative',
		margin: '50px auto',
		'-webkit-transform': 'rotate(0deg)',
		'-moz-transform': 'rotate(0deg)',
		'-o-transform': 'rotate(0deg)',
		transform: 'rotate(0deg)',
		'-webkit-transition': '.5s ease-in-out',
		'-moz-transition': '.5s ease-in-out',
		'-o-transition': '.5s ease-in-out',
		transition: '.5s ease-in-out',
		cursor: 'pointer',
	},
	IconLine: {
		display: 'block',
		position: 'absolute',
		height: 5,
		width: '100%',
		background: colors.lightPrimary,
		borderRadius: 5,
		opacity: 1,
		left: 0,
		'-webkit-transform': 'rotate(0deg)',
		'-moz-transform': 'rotate(0deg)',
		'-o-transform': 'rotate(0deg)',
		transform: 'rotate(0deg)',
		'-webkit-transition': '.25s ease-in-out',
		'-moz-transition': '.25s ease-in-out',
		'-o-transition': '.25s ease-in-out',
		transition: '.25s ease-in-out',
		'-webkit-transform-origin': 'left center',
		'-moz-transform-origin': 'left center',
		'-o-transform-origin': 'left center',
		transformOrigin: 'left center',
	},
	LineTop: {
		top: 0,
	},
	LineMiddle: {
		top: 12,
	},
	LineBottom: {
		top: 24,
	},
	LineTopOpen: {
		'-webkit-transform': 'rotate(45deg)',
		'-moz-transform': 'rotate(45deg)',
		'-o-transform': 'rotate(45deg)',
		transform: 'rotate(45deg)',
		top: -5,
  	left: 8,
	},
	LineMiddleOpen: {
		width: '0%',
  	opacity: 0,
	},
	LineBottomOpen: {
		'-webkit-transform': 'rotate(-45deg)',
		'-moz-transform': 'rotate(-45deg)',
		'-o-transform': 'rotate(-45deg)',
		transform: 'rotate(-45deg)',
		left: 8,
	},
	Hide: {
		display: 'none',
		opacity: 0,
		transition: 'opacity .25s ease',
	},
	MobileMenu: {
		backgroundColor: colors.lightbg,
		color: colors.lightPrimary,
		position: 'fixed',
		zIndex: 998,
		width: '100%',
		height: '100%',
		top: 0,
		right: 0,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24,
	},
	OpenedMenu: {
		display: 'flex',
		opacity: 1,
		transition: 'opacity .5s ease',
	},
}

export default withStyles(styles)(Header)
