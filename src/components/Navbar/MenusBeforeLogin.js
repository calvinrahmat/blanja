import './style/menusBeforeLogin.scoped.scss';
import { Container, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import React from 'react';

const MenusBeforeLogin = () => {
	return (
		<div>
			<Container>
				<Nav className="me-auto menu-before-login d-flex">
					<Link to="/login">
						<Container className="cart-icon">
							<FaShoppingCart />
						</Container>
					</Link>
					<Link to="/login">
						<Button variant="danger" className="login-button">
							Login
						</Button>
					</Link>
					<Link to="/register">
						<Button className="signup-button">SignUp</Button>
					</Link>
				</Nav>
			</Container>
		</div>
	);
};

export default MenusBeforeLogin;
