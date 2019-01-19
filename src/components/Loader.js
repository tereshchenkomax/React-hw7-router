import React from 'react'
import spinner from '../spinner.svg'


const Loader = () => {
	return (
		<div className='ui raised very padded text container segment'>
			<img src={spinner} className="App-logo" alt="logo"/>
		</div>
	)
}

export default Loader