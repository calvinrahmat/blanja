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
import NavbarAfterLogin from './components/navbar/NavbarAfterLogin';
import LoginUser from './components/logins/LoginUser.jsx';

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
						path="/home"
						render={() =>
							!isAuthenticated ? (
								<Container>
									<NavbarInit />
									<CarouselTrending />
									<CarouselCategory />
									<NewItemCards />
									<PopularItemCards />
								</Container>
							) : (
								<Container>
									<NavbarAfterLogin />
									<CarouselTrending />
									<CarouselCategory />
									<NewItemCards />
									<PopularItemCards />
								</Container>
							)
						}
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
								<Container>
									<LoginUser {...props} setAuth={setAuth} />
								</Container>
							) : (
								<Redirect to="/home" />
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

					<Route
						exact
						path="/product/:id"
						render={(props) => (
							<Container>
								<NavbarInit />
								<ProductPage {...props} />
							</Container>
						)}
					/>
					<Route
						exact
						path="/bag"
						render={(props) => (
							// isAuthenticated ? (
							// 	<Container>
							// 		<NavbarAfterLogin />
							// 		<Bag {...props} />
							// 	</Container>
							// ) : (
							// 	<Redirect to="/login" />
							// )
							<Container>
								<NavbarAfterLogin />
								<Bag {...props} />
							</Container>
						)}
					/>
					<Route
						path="/products/:id"
						render={(props) => <ProductPage {...props} />}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
