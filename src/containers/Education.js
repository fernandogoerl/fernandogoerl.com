import React, { Component } from 'react'
import * as api from '../api'
import { withStyles } from '@material-ui/core'

import Section from '../components/Section'


import { colors } from '../helpers'
import FlexBlock from '../components/FlexBlock'

import DevIcon from '../img/icons/course.png'
import DiplomaIcon from '../img/icons/diploma.png'


class Skills extends Component {

	state = {
		myEducation: {},
	}

	componentDidMount () {
		api.getEducation().then((myEducation) =>
			this.setState({ myEducation })
		)
	}

	setIcon = (icon) => (icon === 'diploma' ? DiplomaIcon : DevIcon)

	render() {
		const { myEducation } = this.state
		const { classes, id } = this.props
		return (
			<Section name={id} align='left' id={id} flex={true}>
				{Object.keys(myEducation).map(school => (
					<FlexBlock key={school}>
						<div className={classes.Center}>
							<img src={this.setIcon(myEducation[school].Icon)} className={classes.Icon} alt={myEducation[school].Icon} />
							<div className={classes.School}>{school}</div>
							<div className={classes.Year}>{myEducation[school].Subject}</div>
							<div className={classes.JobTitle}>{myEducation[school].Degree}</div>
							<a className={classes.Button} target='_blank' href={myEducation[school].Url}>View Diploma <span className={classes.Arrow}>&rarr;</span></a>
						</div>
					</FlexBlock>
				))}
			</Section>
		)
	}
}

const styles = {
	Center: {
		textAlign: 'center',
	},
	Icon: {
		width: 125,
		paddingTop: 50,
		paddingBottom: 20,
	},
	School: {
		fontWeight: 500,
		paddingBottom: 10,
	},
	Button: {
		display: 'inline-block',
		color: colors.lightPrimary,
		margin: 20,
		padding: '15px 20px',
		border: `2px solid ${colors.lightPrimary}`,
		borderRadius: 5,
		textDecoration: 'none',
	},

}

export default withStyles(styles)(Skills)
