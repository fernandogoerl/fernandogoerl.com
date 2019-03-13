import React, { Component } from 'react'
import * as api from '../api'
import { withStyles } from '@material-ui/core'

import Section from '../components/Section'


import FlexBlock from '../components/FlexBlock'
import Button from '../components/Button'

import DevIcon from '../img/icons/course.png'
import DiplomaIcon from '../img/icons/diploma.png'


class Education extends Component {

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
					<FlexBlock key={school} size='small'>
						<div className={classes.Center}>
							<img src={this.setIcon(myEducation[school].Icon)} className={classes.Icon} alt={myEducation[school].Icon} />
							<div className={classes.School}>{school}</div>
							<div className={classes.Year}>{myEducation[school].Subject}</div>
							<div className={classes.JobTitle}>{myEducation[school].Degree}</div>
							<Button type='secondary' text='View Diploma' link={myEducation[school].Url} withArrow={true} />
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
		height: 100,
		paddingTop: 100,
		paddingBottom: 20,
	},
	School: {
		fontWeight: 500,
		paddingBottom: 10,
	},
}

export default withStyles(styles)(Education)
