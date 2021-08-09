import './SideBar.scope.scss';
import { FaHome } from 'react-icons/fa';

const SideBar = () => {
	return (
		<div>
			<div className="container d-flex profile">
				<div className="photo-box">
					<img
						src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627339637/Front%20End/profile_yzozml.jpg"
						alt="profile"
					/>
				</div>
				<div className="container user-profile">
					<h1 className="profile-name">Johanes Mikael</h1>
					<div className="d-grid gap-2 d-flex update-profile">
						<i className="fa fa-pencil" aria-hidden="true" />
						<p className="update-profile">Ubah Profile</p>
					</div>
				</div>
			</div>
			<div className="container side-navbar">
				<ul>
					<ul>Store</ul>
					<ul>
						Product
						<li>My Products</li>
						<li>Selling Prodoucts</li>
					</ul>
					<ul>Order</ul>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
