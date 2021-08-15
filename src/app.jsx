import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/home" render={() => <Home />} />
					<Route
						exact
						path="/login"
						render={() => (
							<Container>
								<Login />
							</Container>
						)}
					/>
					<Route
						exact
						path="/search/nama:nama"
						render={() => (
							<Container>
								<searchPage />
							</Container>
						)}
					/>
					<Route
						exact
						path="/seller/add-product"
						render={() => (
							<Container>
								<AddProduct />
							</Container>
						)}
					/>

					<Route exact path="/register" render={() => <Register />} />

					<Route
						exact
						path="/product/:id"
						render={() => (
							<Container>
								<ProductPreview />
							</Container>
						)}
					/>
					<Route
						exact
						path="/seller/inventory"
						render={() => (
							<Container>
								<ProductInventory />
							</Container>
						)}
					/>
					<Route
						exact
						path="/seller/edit-product/:id"
						render={() => (
							<Container>
								<EditProduct />
							</Container>
						)}
					/>
					<Route
						exact
						path="/bag"
						render={() => (
							<Container>
								<BagPage />
							</Container>
						)}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
