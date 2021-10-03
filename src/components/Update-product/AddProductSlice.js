import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
};

const addProductSlice = createSlice({
	name: 'addProduct',
	initialState,
	reducers: {
		postPending: (state) => {
			state.isLoading = true;
		},
		postSuccess: (state) => {
			state.isLoading = false;
		},
	},
});

const { reducer, actions } = addProductSlice;
export const { postPending, postSuccess } = actions;

export default reducer;
