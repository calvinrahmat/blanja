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
import NewItemCards from './components/cards/new-item/NewItemCards.jsx';
import Bag from './components/bag/Bag';
import { Container } from 'react-bootstrap';
import CarouselTrending from './components/carousels/trending/CarouselTrending';
import CarouselCategory from './components/carousels/category/CarouselCategory';
import PopularItemCards from './components/cards/popular-item/PopularItemCards';
import ProductPage from './components/product-page/ProductPage';
import SellingProduct from './components/selling-product/SellingProduct';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};
	return (
		<>
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Container>
								<NavbarInit />
								<CarouselTrending />
								<CarouselCategory />
								<NewItemCards />
								<PopularItemCards />
							</Container>
						)}
					/>
					<Route
						exact
						path="/selling"
						render={() => (
							<Container>
								<NavbarInit />
								<SellingProduct />
							</Container>
						)}
					/>
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
					<Route exact path="/bag" render={(props) => <Bag {...props} />} />
					<Route
						exact
						path="/product"
						render={(props) => <ProductPage {...props} />}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
