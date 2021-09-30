import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';

import {
	Login,
	Home,
	BagPage,
	AddProduct,
	ProductPreview,
	EditProduct,
	Register,
	SearchPage,
	ProfilePage,
} from './pages';

import ProductInventory from './pages/ProductInventory/ProductInventory';

function App() {
	const { isAuth } = useSelector((state) => state.login);
	const { role } = useSelector((state) => state.login);

	console.log(role);

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/home" render={() => <Home />} />
					<Route exact path="/login" render={() => <Login />} />
					<Route exact path="/search" render={() => <SearchPage />} />
					<Route exact path="/register" render={() => <Register />} />

					<Route
						exact
						path="/bag"
						render={() =>
							isAuth && role === 'customer' ? (
								<BagPage />
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						exact
						path="/profile"
						render={() => (isAuth ? <ProfilePage /> : <Redirect to="/login" />)}
					/>

					<Route exact path="/product/:id" render={() => <ProductPreview />} />
					<Route exact path="/seller/add-product">
						{isAuth && role === 'seller' ? (
							<AddProduct />
						) : (
							<Redirect to="/login" />
						)}
					</Route>

					<Route exact path="/seller/inventory">
						{isAuth && role === 'seller' ? (
							<ProductInventory />
						) : (
							<Redirect to="/login" />
						)}
					</Route>
					<Route exact path="/seller/edit-product/:id">
						{isAuth && role === 'seller' ? (
							<EditProduct />
						) : (
							<Redirect to="/login" />
						)}
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
