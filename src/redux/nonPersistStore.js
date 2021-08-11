import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/Navbar/searchSlice';

const store = configureStore({
	reducer: { search: searchReducer },
});

export default store;
