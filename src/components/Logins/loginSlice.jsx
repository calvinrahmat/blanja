import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	isAuth: false,
	error: '',
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
		loginFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = loginSlice;
export const { loginPending, loginSuccess, loginFail } = actions;

export default reducer;
