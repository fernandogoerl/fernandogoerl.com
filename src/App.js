import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as api from './api'
import styled from 'styled-components'

const Block = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;
`

class App extends Component {

	state = {
		greeting: '',
		mySkills: {},
	}

	componentDidMount () {
		api.getGreeting().then((greeting) =>
			this.setState({ greeting })
		)
		api.getSkills().then((mySkills) =>
			this.setState({ mySkills })
		)
	}


  render() {
		const { greeting, mySkills } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
					<Block/>
          <p>
            {greeting}
          </p>
					<ul>{
						Object.keys(mySkills).map(skill => (
							<li>{skill} - {mySkills[skill]}</li>
						))
					}</ul>
        </header>
      </div>
    )
  }
}

export default App
