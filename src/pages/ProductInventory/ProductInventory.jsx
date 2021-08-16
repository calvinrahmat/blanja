import SideBar from '../../components/SideBar/SideBar';
import './ProductInventory.scope.scss';
import MyProduct from '../../components/Product-Inventory/MyProduct';
import NavbarHeader from '../../components/Navbar/NavbarHeader';

const ProductInventory = () => {
	return (
		<div>
			<NavbarHeader />
			<div className="big-container">
				<div className="left-container">
					<SideBar />
				</div>
				<div className="right-container">
					<MyProduct />
				</div>
			</div>
		</div>
	);
};

export default ProductInventory;
