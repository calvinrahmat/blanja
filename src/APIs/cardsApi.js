import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCard = createAsyncThunk('card/getCard', async () => {
	const response = await axios.get(`${process.env.REACT_APP_API}/products`);
	const { data } = await response.data;
	if (response.ok) {
		throw new Error('error');
	}
	return data;
});

const cardSlice = createSlice({
	name: 'card',
	initialState: {
		list: [],
		status: null,
	},
	extraReducers: {
		[getCard.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getCard.fulfilled]: (state, { payload }) => {
			state.list = payload;
			state.status = 'success';
		},
		[getCard.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export default cardSlice.reducer;
