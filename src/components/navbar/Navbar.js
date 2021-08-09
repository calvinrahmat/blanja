import 'bootstrap/dist/css/bootstrap.css';
import {
	Nav,
	Navbar,
	Container,
	FormControl,
	Button,
	Form,
} from 'react-bootstrap';
import {
	FaSearch,
	FaFilter,
	FaShoppingCart,
	FaBell,
	FaEnvelope,
} from 'react-icons/fa';

import './Navbar.scoped.scss';

const NavbarInit = () => {
	return (
		<Container className="navbar">
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="#home" className="brand">
						<Nav.Link href="/home">
							<img
								src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
								alt=""
							/>
						</Nav.Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbar-collapse" />

					<Navbar.Collapse>
						<div className="navbar-mobile">
							<ul>
								<li>
									<Nav.Link href="#home">SignUp</Nav.Link>
								</li>
								<li>
									<Nav.Link href="#home">Login</Nav.Link>
								</li>
								<li>
									<Nav.Link href="#home">Cart</Nav.Link>
								</li>
							</ul>
						</div>
					</Navbar.Collapse>
					<Container className="navbar-inside">
						<Navbar.Collapse id="basic-navbar-nav">
							<Container className="tools">
								<Container className="search-bar">
									<Form className="d-flex search-box bg-transparent ">
										<FormControl
											type="search"
											placeholder="Search"
											className="mr-2"
											aria-label="Search"
										/>
									</Form>
									<Nav.Link href="#home">
										<FaSearch className="search-icon" />
									</Nav.Link>
								</Container>
								<Container className="filter-box">
									<Nav.Link href="#home">
										<FaFilter className="filter-icon" />
									</Nav.Link>
								</Container>
							</Container>
							<Container>
								<Nav className="me-auto menu-before-login d-flex">
									<Nav.Link href="/bag">
										<Container className="cart-icon">
											<FaShoppingCart />
										</Container>
									</Nav.Link>
									<Nav.Link href="/login">
										<Button variant="danger" className="login-button">
											Login
										</Button>
									</Nav.Link>
									<Nav.Link href="/register">
										<Button className="signup-button">SignUp</Button>
									</Nav.Link>
								</Nav>
							</Container>
						</Navbar.Collapse>
					</Container>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavbarInit;
