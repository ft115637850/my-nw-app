import update from 'immutability-helper';

function loginSuccess(state, action) {
	const { token } = action.payload;
	return update(state, {
		userData: {
			$merge: {
				token: token,
				isAuthenticated: true
			}
		}
	});
}
export default loginSuccess;
