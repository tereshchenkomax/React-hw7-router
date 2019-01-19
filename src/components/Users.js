import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/getUsers';
import Loader from './Loader'


class Users extends Component {

	state = {
		users: []
	}

	componentDidMount() {
		setTimeout(() => this.props.fetchUsers(), 2000);

	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.users !== nextProps.users){
			return {
				users: nextProps.users
			}
		}
		return null
	}

	static renderUsers (users) {
		return users.map(user => (
			<li key={user.id}>{user.name}</li>
		))
	}


	render() {

		const {users} = this.state
		return (
			typeof users !== 'undefined'
				?
			<div className='ui raised very padded text container segment'>
				<ul>
					{Users.renderUsers(users)}
				</ul>

			</div>
			: <Loader/>
		)
	}
}


const mapStateToProps = ({users }) => {
	return { users };
};

export default connect(
	mapStateToProps,
	{ fetchUsers }
)(Users);