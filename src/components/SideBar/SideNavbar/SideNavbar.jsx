import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const SideNavbar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Store</Nav.Link>
							<Nav.Link href="#pricing">Product</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default SideNavbar;
