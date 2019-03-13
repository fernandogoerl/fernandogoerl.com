import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Skype from './pages/Skype'
import Header from './components/Header'

import { withStyles } from '@material-ui/styles'


const styles = {
	App: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}


class App extends Component {

	state = {
		scroll: 0
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	handleScroll = (event) => {
			let scroll = document.documentElement.scrollTop
			this.setState({scroll})
	}

	setScroll = (scroll) => this.setState({scroll})

  render() {
		const { classes } = this.props
		const { scroll } = this.state
    return (
      <div className={classes.App}>
        <Header scroll={scroll} />
				<Route exact path='/' render={() => (<Home/>)}/>
				<Route path='/skype' component={Skype}/>

      </div>
    )
  }
}

export default withStyles(styles)(App)
