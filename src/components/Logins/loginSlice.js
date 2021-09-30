import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	isAuth: false,
	error: '',
	token: '',
	email: '',
	profile: '',
	role: '',
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loginPending: (state) => {
			state.isLoading = true;
		},
		loginSuccess: (state) => {
			state.isAuth = true;
			state.isLoading = false;
			state.error = '';
		},
		getEmail: (state, { payload }) => {
			state.email = payload;
		},
		getProfile: (state, { payload }) => {
			state.profile = payload;
		},
		loginFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		getRole: (state, { payload }) => {
			state.role = payload;
		},
		getToken: (state, { payload }) => {
			state.token = payload;
		},
		logout: (state) => {
			state.isAuth = false;
			state.token = '';
			state.profile = '';
			state.email = '';
			state.role = '';
		},
	},
});

const { reducer, actions } = loginSlice;
export const {
	loginPending,
	loginSuccess,
	loginFail,
	logout,
	getEmail,
	getProfile,
	getRole,
	getToken,
} = actions;

export default reducer;
