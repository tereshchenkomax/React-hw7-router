import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
	<div className="top-header ui three item menu">
		<NavLink exact to="/" activeClassName='active' className='item'>Home</NavLink>
		<NavLink to="/about" activeClassName="myActiveClass" className='item'>About</NavLink>
		<NavLink to="/users" activeClassName="myActiveClass" className='item'>Users</NavLink>
	</div>
)

export default Header