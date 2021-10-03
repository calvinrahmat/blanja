import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container } from 'react-bootstrap';
import './style/NavbarHeader.scoped.scss';
import Tools from './Tools';
import MenusAfterLogin from './MenusAfterLogin';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenusBeforeLogin from './MenusBeforeLogin';
import { useDispatch } from 'react-redux';
import { logout } from '../Logins/loginSlice';
import SearchBar from './SearchBar/SearchBar';

const NavbarHeader = () => {
	const { isAuth } = useSelector((state) => state.login);
	const { role } = useSelector((state) => state.login);
	const dispatch = useDispatch();

	return (
		<div className="navbar">
			<Navbar expand="lg" collapseOnSelect fixed="top">
				<Container>
					<Navbar.Brand className="brand">
						<Link to="/home">
							<img
								src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
								alt=""
							/>
						</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbar-collapse-before-login" />

					<Navbar.Collapse id="navbar-collapse-before-login">
						{isAuth === false ? (
							<div className="navbar-mobile">
								<ul>
									<li>
										<Link to="/register">SignUp</Link>
									</li>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/bag">Cart</Link>
									</li>
								</ul>
							</div>
						) : isAuth && role === 'customer' ? (
							<div className="navbar-mobile">
								<ul>
									<li>
										<SearchBar />
									</li>

									<li>
										<Link to="/bag">Bag</Link>
									</li>
									<li>
										<Link to="/profile">My Profile</Link>
									</li>

									<li onClick={() => dispatch(logout())}>Logout</li>
								</ul>
							</div>
						) : isAuth && role === 'seller' ? (
							<div className="navbar-mobile">
								<ul>
									<li>
										<Link to="/seller/inventory">My Inventory</Link>
									</li>
									<li>
										<Link to="/profile">My Profile</Link>
									</li>
									<li>
										<Link to="/seller/add-product">Selling Products</Link>
									</li>
									<li onClick={() => dispatch(logout())}>Logout</li>
								</ul>
							</div>
						) : (
							<span />
						)}
					</Navbar.Collapse>

					<Navbar.Collapse className="basic-navbar" id="basic-navbar-nav">
						<Container className="navbar-inside">
							<Tools />
							{isAuth ? <MenusAfterLogin /> : <MenusBeforeLogin />}
						</Container>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarHeader;
