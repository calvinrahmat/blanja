import NavbarHeader from '../../components/Navbar/NavbarHeader';
import Sidebar from '../../components/SideBar/Sidebar';
import UpdateProduct from '../../components/Update-product/UpdateProduct';
import './AddProduct.scoped.css';

const AddProduct = () => {
	return (
		<div>
			<NavbarHeader />
			<div className="left-container">
				<Sidebar />
			</div>
			<div className="right-container">
				<UpdateProduct />
			</div>
		</div>
	);
};

export default AddProduct;
