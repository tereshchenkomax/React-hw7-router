import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import AboutUs from './components/AboutUs'
import Header from './components/Header'


class App extends Component {
	render() {
		return (
			<div className='ui container'>
				<Header />
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/users' component={Users}/>
						<Route path='/about' component={AboutUs}/>
					</Switch>
			</div>
		)
	}
}

export default App