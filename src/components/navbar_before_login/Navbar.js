import 'bootstrap/dist/css/bootstrap.css';
import {
	Nav,
	Navbar,
	Container,
	FormControl,
	Button,
	Form,
	Row,
} from 'react-bootstrap';

const NavbarInit = () => {
	return (
		<div className="Navbar" d-flex justify-content-center>
			<Navbar bg="light" expand="md">
				<Container>
					<Row>
						<Navbar.Brand href="#home">
							<img
								src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
								alt=""
							/>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />

						<Navbar.Collapse id="basic-navbar-nav">
							<Form className="d-flex search-box">
								<FormControl
									type="search"
									placeholder="Search"
									className="mr-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>

							<Nav className="me-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#link">Link</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Row>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarInit;
