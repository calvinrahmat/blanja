import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bagItem: '',
	qty: '',
};

const bagSlice = createSlice({
	name: 'bag',
	initialState,
	reducers: {
		getBagItem: (state, { payload }) => {
			state.bagItem = payload;
		},
		getBagQty: (state, { payload }) => {
			state.qty = payload;
		},
	},
});

const { reducer, actions } = bagSlice;
export const { getBagItem, getBagQty } = actions;

export default reducer;
