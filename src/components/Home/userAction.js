import axios from 'axios';
import { getUserFail, getUserSuccess, getUserPending } from './userSlice';

const urlUser = `${process.env.REACT_API}/user/calvin.rahmat@yahoo.co.id`;
export const getUserProfile = () => async (dispatch) => {
	try {
		dispatch(getUserPending());
		axios.get(urlUser).then((res) => {
			console.log(res);
		});
		dispatch(getUserSuccess());
	} catch (error) {
		console.error(error);
	}
};
