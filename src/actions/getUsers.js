import getData from '../apis/getdata'


export const fetchUsers = () => async (dispatch) => {
	const response = await getData.get(`/users/`)
	dispatch({type: "GET_USERS", payload: response.data})
}