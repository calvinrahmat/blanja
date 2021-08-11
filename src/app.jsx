import { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import {
	Login,
	Home,
	BagPage,
	AddProduct,
	ProductPreview,
	EditProduct,
	Register,
} from './pages';
import ProductInventory from './pages/ProductInventory/ProductInventory';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/home" render={() => <Home />} />

					<Route
						exact
						path="/seller/add-product"
						render={() => (
							<Container>
								<AddProduct />
							</Container>
						)}
					/>
					<Route
						exact
						path="/login"
						render={(props) =>
							!isAuthenticated ? (
								<Container>
									<Login {...props} setAuth={setAuth} />
								</Container>
							) : (
								<Redirect to="/home" />
							)
						}
					/>
					<Route exact path="/register" render={(props) => <Register />} />

					<Route
						exact
						path="/product/:id"
						render={(props) => (
							<Container>
								<ProductPreview {...props} />
							</Container>
						)}
					/>
					<Route
						exact
						path="/seller/inventory"
						render={(props) => (
							<Container>
								<ProductInventory {...props} />
							</Container>
						)}
					/>
					<Route
						exact
						path="/seller/edit-product"
						render={(props) => (
							<Container>
								<EditProduct {...props} />
							</Container>
						)}
					/>
					<Route
						exact
						path="/bag"
						render={(props) => (
							<Container>
								<BagPage {...props} />
							</Container>
						)}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
