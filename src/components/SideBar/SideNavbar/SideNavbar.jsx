import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link to href="#features">
								Store
							</Link>
							<Link to href="#pricing">
								Product
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default SideNavbar;
