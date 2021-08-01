import { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './index.scss';
import NavbarInit from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import { Component } from 'react';
import Dashboard from './components/users/Dashboard';
import Login from './components/users/Login';
import Register from './components/users/Register';
import ItemCards from './components/cards/ItemCards.jsx';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};
	return (
		<>
			<NavbarInit />
			<div className="container">
				<ItemCards />
			</div>

			<Router>
				<div className="container">
					<Switch>
						<Route
							exact
							path="/login"
							render={(props) =>
								!isAuthenticated ? (
									<Login {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/" />
								)
							}
						/>
						<Route
							exact
							path="/register"
							render={(props) =>
								!isAuthenticated ? (
									<Register {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<Dashboard {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/login" />
								)
							}
						/>
					</Switch>
				</div>
			</Router>

			<div className="container"></div>
		</>
	);
}

export default App;
