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

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/home" render={() => <Home />} />
					<Route exact path="/login" render={() => <Login />} />
					<Route exact path="/search" render={() => <SearchPage />} />
					<Route
						exact
						path="/seller/add-product"
						render={() => <AddProduct />}
					/>

					<Route exact path="/register" render={() => <Register />} />

					<Route exact path="/product/:id" render={() => <ProductPreview />} />
					<Route
						exact
						path="/seller/inventory"
						render={() => <ProductInventory />}
					/>
					<Route
						exact
						path="/seller/edit-product/:id"
						render={() => <EditProduct />}
					/>
					<Route
						exact
						path="/bag"
						render={() => (isAuth ? <BagPage /> : <Redirect to="/login" />)}
					/>
					<Route
						exact
						path="/profile"
						render={() => (isAuth ? <ProfilePage /> : <Redirect to="/login" />)}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
