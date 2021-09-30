import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app.jsx';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

let persistor = persistStore(store);

export const queryClient = new QueryClient();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</PersistGate>
	</Provider>,

	document.getElementById('root')
);
