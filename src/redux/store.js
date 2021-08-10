import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/Logins/loginSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from '../components/Home/userSlice';

const reducers = combineReducers({
	login: loginReducer,
	user: userReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
});

export default store;
