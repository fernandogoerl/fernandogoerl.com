import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

import * as api from '../api'

import Section from '../components/Section'

import { FiPhone }  from 'react-icons/fi'
import { TiSocialSkypeOutline }  from 'react-icons/ti'
import { FiMail }  from 'react-icons/fi'
import { FiLinkedin }  from 'react-icons/fi'

import { colors } from '../helpers'
import FlexBlock from '../components/FlexBlock';

export class Contact extends Component {

	state = {
		myChannels: [],
	}

	componentDidMount() {
		api.getContacts().then((myChannels) =>
			this.setState({myChannels})
		)
	}

	setIcon = (type) => {
		const { classes } = this.props
		switch (type) {
			case 'Mobile phone':
				return (<FiPhone className={classes.Icon}/>)
			case 'Skype':
				return (<TiSocialSkypeOutline className={classes.Icon}/>)
			case 'E-mail address':
				return (<FiMail className={classes.Icon}/>)
			case 'LinkedIn':
				return (<FiLinkedin className={classes.Icon}/>)

			default:
				break
		}
	}

	render() {
		const { id, classes } = this.props
		const { myChannels } = this.state
		return (
			<Section name={id} align='right' id={id}>
				<div className={classes.Container}>
					<div className={classes.MainText}>I'm available for<br/>new opportunities.</div>
					<div className={classes.SubText}>
						Thank you for yout time! Please, feel free to contact me if you have any questions. I'm available in all this channels:
					</div>
					<div className={classes.ChannelsContainer}>
						{myChannels.map((channel) => (
							<FlexBlock key={channel.Type} size='full'>
								<a href={channel.Url}>
									<div className={classes.IconContainer}>{this.setIcon(channel.Type)}</div>
									<div className={classes.InfoContainer}>
										<span className={classes.Info}>{channel.Info}</span>
										<span className={classes.Info}>{channel.Type}</span>
									</div>
								</a>
							</FlexBlock>
						))}
					</div>
				</div>
			</Section>
		)
	}
}

const styles = {
	Container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		margin: 50,
		marginTop: 100,
	},
	MainText: {
		fontSize: 50,
		fontWeight: 400,
	},
	SubText: {
		paddingTop: 20,
		paddingBottom: 30,
		borderBottom: '2px solid '+colors.lightPrimary,
		marginBottom: 20,
	},
	ChannelsContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		'@media (max-width: 1478px)': {
			justifyContent: 'center',
		}
	},
	IconContainer: {
		display: 'inline-block',
	},
	BigIcon: {
		color: colors.lightPrimary,
		fontSize: 42,
	},
	Icon: {
		color: colors.lightPrimary,
		fontSize: 50,
	},
	InfoContainer: {
		display: 'inline-block',
		fontSize: 16,
		padding: 20,
		minWidth: 170,
		verticalAlign: 'super',
		color: colors.white,
	},
	Info: {
		display: 'block'
	},
}

export default withStyles(styles)(Contact)
