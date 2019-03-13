import React, { Component } from 'react'

import { withStyles } from '@material-ui/core'

import { LinearProgress } from '@material-ui/core'

import { colors } from '../helpers'

class SkillProgress extends Component {

	state = {
		completed: 0
	}

	componentDidMount() {
    this.timer = setInterval(this.progress, 10)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  progress = () => {
    if (this.state.completed < this.props.progress) {
      this.setState({ completed: this.state.completed + 2 })
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
    paddingTop: 15,
    paddingBottom: 15,
	},
	SkillName: {
		minWidth: 205,
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
