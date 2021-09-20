import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: '',
	isLoading: false,
	error: '',
	userImage: '',
	userName: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUserPending: (state) => {
			state.isLoading = true;
		},
		getUserSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
			state.error = '';
		},
		getUserFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		getUserImage: (state, { payload }) => {
			state.userImage = payload;
		},
		getUserName: (state, { payload }) => {
			state.userName = payload;
		},
	},
});

const { reducer, actions } = userSlice;
export const {
	getUserPending,
	getUserSuccess,
	getUserFail,
	getUserImage,
	getUserName,
} = actions;

export default reducer;
