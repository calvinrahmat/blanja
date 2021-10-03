import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/Logins/loginSlice';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from '../components/Home/userSlice';
import searchReducer from '../components/Navbar/searchSlice';
import bagReducer from '../components/Bag/BagSlice';
import sortReducer from '../components/Navbar/sortSlice';
import addProductReducer from '../components/Update-product/AddProductSlice';
const reducers = combineReducers({
	login: loginReducer,
	user: userReducer,
	search: searchReducer,
	bag: bagReducer,
	sort: sortReducer,
	addProduct: addProductReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['login', 'user', 'search'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export default store;
