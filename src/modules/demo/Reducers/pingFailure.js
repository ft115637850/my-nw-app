import update from 'immutability-helper';

function pingFailure(state, action) {
	const { pong } = action.payload;
	return update(state, {
		userData: {
			$merge: {
				pong: pong
			}
		}
	});
}
export default pingFailure;
