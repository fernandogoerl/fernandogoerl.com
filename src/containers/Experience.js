import React, { Component } from 'react'
import * as api from '../api'
import { withStyles } from '@material-ui/core'

import Section from '../components/Section'

import { colors } from '../style'
import FlexBlock from '../components/FlexBlock'

class Experience extends Component {
	state = {
		myExp: {},
	}

	componentDidMount () {
		api.getExp().then((myExp) =>
			this.setState({ myExp })
		)
	}

	render() {
		const { myExp } = this.state
		const { classes, id } = this.props
		return (
			<Section name='experience' align='right' id={id}>
				<div className={classes.InnerContainer}>
					{Object.keys(myExp).map(year => (
						<FlexBlock key={year}>
							<div className={classes.Year}>{year}</div>
							<div className={classes.JobTitle}>{myExp[year].JobTitle} at {myExp[year].Company}</div>
							<div className={classes.Description}>{myExp[year].Description}</div>
						</FlexBlock>
					))}
				</div>
			</Section>
		)
	}
}

const styles = {
	Container: {
		alignSelf: 'center',
		flex: 1,
		width: '100%'
	},
	InnerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexWrap: 'wrap'

	},
	Year: {
		color: colors.lightPrimary,
		fontSize: 40,
		fontWeight: 500,
		paddingBottom: 20,
		borderBottom: `2px solid ${colors.lightbg}`,
	},
	JobTitle: {
		paddingTop: 20,
		paddingBottom: 20,
		fontWeight: 500,
	},
	Description: {
		minHeight: 140,
	}

}

export default withStyles(styles)(Experience)
