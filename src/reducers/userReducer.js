export const userReducer = (state = [], {type, payload}) => {
	switch (type) {
		case "GET_USERS":
			return {users: payload}
		default:
			return state
	}
}