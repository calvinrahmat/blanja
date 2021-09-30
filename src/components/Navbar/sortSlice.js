import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	priceHighToLow: false,
	priceLowToHigh: false,
	nameAscending: false,
	nameDescending: false,
	sortProductNew: false,
	sortProductOld: false,
};

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		priceHigh: (state, { payload }) => {
			state.priceHighToLow = payload;
			state.priceLowToHigh = false;
			state.nameAscending = false;
			state.nameDescending = false;
			state.sortProductNew = false;
			state.sortProductOld = false;
		},
		priceLow: (state, { payload }) => {
			state.priceLowToHigh = payload;
			state.priceHighToLow = false;
			state.nameAscending = false;
			state.nameDescending = false;
			state.sortProductNew = false;
			state.sortProductOld = false;
		},
		nameAsc: (state, { payload }) => {
			state.nameAscending = payload;
			state.priceLowToHigh = false;
			state.priceHighToLow = false;
			state.nameDescending = false;
			state.sortProductNew = false;
			state.sortProductOld = false;
		},
		nameDesc: (state, { payload }) => {
			state.nameDescending = payload;
			state.nameAscending = false;
			state.priceLowToHigh = false;
			state.priceHighToLow = false;
			state.sortProductNew = false;
			state.sortProductOld = false;
		},
		sortNew: (state, { payload }) => {
			state.sortProductNew = payload;
			state.nameAscending = false;
			state.priceLowToHigh = false;
			state.priceHighToLow = false;
			state.nameDescending = false;
			state.sortProductOld = false;
		},
		sortOld: (state, { payload }) => {
			state.sortProductOld = payload;
			state.nameAscending = false;
			state.priceLowToHigh = false;
			state.priceHighToLow = false;
			state.nameDescending = false;
			state.sortProductNew = false;
		},
		reset: (state) => {
			state.sortProductOld = false;
			state.nameAscending = false;
			state.priceLowToHigh = false;
			state.priceHighToLow = false;
			state.nameDescending = false;
			state.sortProductNew = false;
		},
	},
});

const { reducer, actions } = sortSlice;
export const {
	priceHigh,
	priceLow,
	nameAsc,
	nameDesc,
	sortNew,
	sortOld,
	reset,
} = actions;

export default reducer;
