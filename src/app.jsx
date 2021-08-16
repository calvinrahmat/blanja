import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
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
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/home" render={() => <Home />} />
					<Route exact path="/login" render={() => <Login />} />
					<Route exact path="/search/nama:nama" render={() => <searchPage />} />
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
					<Route exact path="/bag" render={() => <BagPage />} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
