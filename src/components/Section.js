import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import SectionTitle from './SectionTitle'

class Section extends Component {
	render() {
		const { classes, children, name, align, id, flex } = this.props
		return (
			<div className={classes.Container} id={id}>
				<SectionTitle name={name} align={align}/>
				{flex
				? (
					<div className={classes.InnerContainer}>
						{children}
					</div>
				) : (
					children
				)}
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
		paddingBottom: 50,
		'@media (max-width: 700px)': {
			paddingTop: 50,
		},
	},
	InnerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
}

export default withStyles(styles)(Section)
