import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import * as api from '../api'

import Section from '../components/Section'
import FlexBlock from '../components/FlexBlock'
import Button from '../components/Button'

import { colors } from '../helpers'

import DevIcon from '../img/icons/course.png'
import DiplomaIcon from '../img/icons/diploma.png'


class Work extends Component {

	state = {
		myWork: [],
	}

	componentDidMount () {
		api.getWork().then((myWork) =>
			this.setState({ myWork })
		)
	}

	setIcon = (icon) => (icon === 'diploma' ? DiplomaIcon : DevIcon)

	render() {
		const { myWork } = this.state
		const { classes, id } = this.props
		return (
			<Section name={id} align='left' id={id} flex={true}>
				{myWork.map(work => (
					<FlexBlock key={work.Name} size='normal'>
						<div className={classes.Center}>
							<img src={work.Image} className={classes.Image} alt={`${work.Image}`} />
							<div className={classes.ImageBackground}></div>
							<div className={classes.Category}>{work.Category}</div>
							<div className={classes.Name}>{work.Name}</div>
							<div className={classes.Description}>{work.Description}</div>
						</div>
					</FlexBlock>
				))}
				<div>
					<div className={classes.GitHubCTA}>
						<span>Access my GitHub profile to see more about my work!</span>
						<Button type='primary' text='Go to Github' link='https://github.com/fernandogoerl' withArrow={true} />
					</div>
					<div className={classes.SmallText}>
						A lot of my work is private due to confidentiality contracts.<br/>
						If you want to know more about my projects and my work, please contact me.
					</div>
				</div>
			</Section>
		)
	}
}

const styles = {
	Center: {
		textAlign: 'center',
		marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
	},
	Image: {
		maxWidth: 470,
		marginBottom: -290,
		'@media (max-width: 500px)': {
			width: 350,
			marginBottom: -218,
		},
	},
	ImageBackground: {
		backgroundColor: colors.lightbg,
		width: 470,
		height: 320,
		zIndex: -10,
		marginLeft: 40,
		'@media (max-width: 500px)': {
			width: 350,
			height: 238,
		},
	},
	Category: {
		fontWeight: 500,
		paddingTop: 100,
		paddingBottom: 15,
	},
	Name: {
		textTransform: 'uppercase',
		fontWeight: 500,
		color: colors.lightPrimary,
		paddingTop: 15,
		paddingBottom: 15,
	},
	Description: {
		maxWidth: 500,
		minHeight: 90,
	},
	GitHubCTA: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: 50,
		paddingLeft: 50,
		paddingRight: 50,
		fontSize: 28,
		fontWeight: 500,
		'@media (max-width: 700px)': {
			display: 'block',
			textAlign: 'center',
			paddingLeft: 40,
			paddingRight: 40,
		},
	},
	SmallText: {
		padding: 10,
		fontSize: 12,
		textAlign: 'center',
	},
}

export default withStyles(styles)(Work)
