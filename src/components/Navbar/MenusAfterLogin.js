import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaBell, FaEnvelope } from 'react-icons/fa';
import './style/MenusAfterLogin.scoped.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../Logins/loginSlice';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MenusAfterLogin = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	return (
		<div>
			<Container>
				<Nav className="me-auto menu-after-login">
					<Link to="/bag">
						<Container className="menu-icon">
							<FaShoppingCart />
						</Container>
					</Link>
					<Nav.Link>
						<Container className="menu-icon">
							<FaBell />
						</Container>
					</Nav.Link>
					<Nav.Link>
						<Container className="menu-icon">
							<FaEnvelope />
						</Container>
					</Nav.Link>
					<Dropdown>
						<Nav.Link className="photo-box">
							<Dropdown.Toggle variant="none">
								<img
									src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627339637/Front%20End/profile_yzozml.jpg"
									alt="profile"
								/>
							</Dropdown.Toggle>
						</Nav.Link>
						<Dropdown.Menu>
							<Dropdown.Item onClick={() => dispatch(logout())}>
								Logout
							</Dropdown.Item>
							<Dropdown.Item onClick={() => dispatch(logout())}>
								{`${user.name}'s Profile`}
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</div>
	);
};

export default MenusAfterLogin;
