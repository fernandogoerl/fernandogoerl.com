import React, { Component } from 'react'

import { withStyles } from '@material-ui/core'

import { LinearProgress } from '@material-ui/core'

import { colors } from '../helpers'

class SkillProgress extends Component {

	state = {
		completed: 0
	}

	componentDidMount() {
    this.timer = setInterval(this.progress, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  progress = () => {
		const { completed } = this.state
		const { progress } = this.props
    if (completed < progress) {
      this.setState({ completed: completed + 5 })
    }
	}

	render() {
		const { skillName, classes } = this.props
		return (
			<div className={classes.Container}>
				<div className={classes.SkillName}>
					{skillName}
				</div>
				<LinearProgress
					className={classes.ProgressContainer}
					classes={{barColorPrimary: classes.Progress}}
					variant="determinate"
					value={this.state.completed}
				/>
			</div>
		)
	}
}

const styles = {
	Container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
	},
	SkillName: {
		minWidth: 225,
	},
	Progress: {
		backgroundColor: colors.lightPrimary,
	},
	ProgressContainer: {
		flex:1,
		backgroundColor: colors.lightbg,
		height: 26,
	}
}

export default withStyles(styles)(SkillProgress)
