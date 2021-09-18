import axios from 'axios';
import { getUserFail, getUserSuccess, getUserPending } from './userSlice';

export const getUserProfile = (email) => async (dispatch) => {
	try {
		const urlUser = `${process.env.REACT_APP_API}/user/email`;
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
