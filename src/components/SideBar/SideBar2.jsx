import './SideBar.scoped.scss';
import { useSelector } from 'react-redux';
import { SideBarData } from './SidebarData';

const SideBar = () => {
	const { userName } = useSelector((state) => state.user);
	const { userImage } = useSelector((state) => state.user);
	return (
		<div className="sidebar-nav">
			<div className=" d-flex profile">
				<div className="photo-box">
					<img src={userImage} alt="profile" />
				</div>
				<div className="container user-profile">
					<h1 className="profile-name">{userName}</h1>
					<div className="d-grid gap-2 d-flex update-profile">
						<i className="fa fa-pencil" aria-hidden="true" />
						<p className="update-profile">Ubah Profile</p>
					</div>
				</div>
			</div>
			<div className=" menus">
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
