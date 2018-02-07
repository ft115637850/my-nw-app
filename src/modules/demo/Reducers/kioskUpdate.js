import update from 'immutability-helper';

function kioskUpdate(state, action) {
	const { isKioskMode } = action.payload;
	return update(state, {
		userData: {
			$merge: {
				isKioskMode
			}
		}
	});
}
export default kioskUpdate;
