import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'


import Hero from '../containers/Hero'
import Experience from '../containers/Experience'
import Skills from '../containers/Skills'
import Education from '../containers/Education'
import Work from '../containers/Work'
import Contact from '../containers/Contact'

class Home extends Component {

	render() {
		const { classes } = this.props
		return (
			<div className={classes.Page} id='home'>
				<Hero id='hero'/>
				<Experience id='experience'/>
				<Education id='education'/>
				<Skills id='skills'/>
				<Work id='my_work'/>
				<Contact id='contact_me'/>
			</div>
		)
	}
}

const styles = {
	Page: {
		flex: 1,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}

export default withStyles(styles)(Home)
