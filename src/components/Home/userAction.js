import axios from 'axios';
import { getUserFail, getUserSuccess, getUserPending } from './userSlice';

const urlUser = `${process.env.REACT_APP_API}/user/calvin.rahmat@yahoo.co.id`;
export const getUserProfile = () => async (dispatch) => {
	try {
		dispatch(getUserPending());
		axios.get(urlUser).then((res) => {
			console.log(res.data);

			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});

			if (value) return dispatch(getUserSuccess(value[0]));
			dispatch(getUserFail());
		});
	} catch (error) {
		console.error(getUserFail(error));
	}
};
