import React, { Component } from 'react'
import * as api from '../api'
import { withStyles } from '@material-ui/core'

import SkillProgress from '../components/SkillProgress'
import Section from '../components/Section'


import { colors } from '../style'
import FlexBlock from '../components/FlexBlock'


class Skills extends Component {

	state = {
		mySkills: {},
	}

	componentDidMount () {
		api.getSkills().then((mySkills) =>
			this.setState({ mySkills })
		)
	}

	render() {
		const { mySkills } = this.state
		const { classes, id } = this.props
		return (
			<Section name='skills' align='right' id={id}>
				<div className={classes.InnerContainer}>
					{Object.keys(mySkills).map(category => (
						<FlexBlock key={category}>
							<div className={classes.Category}>{category}</div>
							{Object.keys(mySkills[category]).map(skillName => (
								<SkillProgress key={skillName} progress={mySkills[category][skillName]} skillName={skillName}/>
							))}
						</FlexBlock>
					))}
				</div>
			</Section>
		)
	}
}

const styles = {
	InnerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexWrap: 'wrap'
	},
	Category: {
		textTransform: 'uppercase',
		fontWeight: 500,
		color: colors.lightPrimary,
		paddingTop: 50,
		paddingBottom: 30,
	},
}

export default withStyles(styles)(Skills)
