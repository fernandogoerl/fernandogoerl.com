import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import SectionTitle from './SectionTitle'

class Section extends Component {
	render() {
		const { classes, children, name, align, id } = this.props
		return (
			<div className={classes.Container} id={id}>
				<SectionTitle name={name} align={align}/>
				{children}
			</div>
		)
	}
}

const styles = {
	Container: {
		alignSelf: 'center',
		flex: 1,
		width: '100%',
		paddingTop: 100,
	},
}

export default withStyles(styles)(Section)
