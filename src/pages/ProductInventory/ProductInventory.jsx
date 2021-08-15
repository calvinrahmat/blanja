import { Container } from 'react-bootstrap';
import SideBar from '../../components/SideBar/SideBar';
import './ProductInventory.scope.scss';
import MyProduct from '../../components/Product-Inventory/MyProduct';
import NavbarHeader from '../../components/Navbar/NavbarHeader';

const ProductInventory = () => {
	return (
		<div>
			<NavbarHeader />
			<Container className="big-container">
				<Container className="left-container">
					<SideBar />
				</Container>
				<Container className="right-container">
					<MyProduct />
				</Container>
			</Container>
		</div>
	);
};

export default ProductInventory;
