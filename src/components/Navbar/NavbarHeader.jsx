import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container } from 'react-bootstrap';
import './style/NavbarHeader.scoped.scss';
import Tools from './Tools';
import MenusAfterLogin from './MenusAfterLogin';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenusBeforeLogin from './MenusBeforeLogin';

const NavbarHeader = () => {
	const { isAuth } = useSelector((state) => state.login);
	return (
		<div className="navbar">
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand className="brand">
						<Link to="/home">
							<img
								src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
								alt=""
							/>
						</Link>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="navbar-collapse" />

					<Container className="navbar-inside">
						<Navbar.Collapse id="navbar-collapse-before-login">
							<div className="navbar-mobile">
								<ul>
									<li>
										<Link to="#home">SignUp</Link>
									</li>
									<li>
										<Link to="#home">Login</Link>
									</li>
									<li>
										<Link to="#home">Cart</Link>
									</li>
								</ul>
							</div>
						</Navbar.Collapse>

						<Navbar.Collapse className="basic-navbar" id="basic-navbar-nav">
							<Container className="navbar-inside">
								<Tools />
								{isAuth ? <MenusAfterLogin /> : <MenusBeforeLogin />}
							</Container>
						</Navbar.Collapse>
					</Container>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarHeader;
