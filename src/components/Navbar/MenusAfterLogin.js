import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaBell, FaEnvelope } from 'react-icons/fa';
import './style/MenusAfterLogin.scoped.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../Logins/loginSlice';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
const MenusAfterLogin = () => {
	const [user, setUser] = useState('');
	const { profile } = useSelector((state) => state.login);

	const image = profile.data[0].img;

	const { email } = useSelector((state) => state.login);
	const dispatch = useDispatch();
	const urlUser = `${process.env.REACT_APP_API}/user/${email}`;
	useEffect(() => {
		axios.get(urlUser).then((res) => {
			console.log(res.data);

			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});

			if (value) setUser(value);
		});
	}, [urlUser]);
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
									src={image ? image : profile.data[0].data.img}
									alt="profile"
								/>
							</Dropdown.Toggle>
						</Nav.Link>
						<Dropdown.Menu>
							<Dropdown.Item onClick={() => dispatch(logout())}>
								Logout
							</Dropdown.Item>

							<Dropdown.Item>
								<Link
									to="/profile"
									style={{ textDecoration: 'none', color: 'black' }}
								>
									{user ? (
										<span>{user[0].name}'s Profile</span>
									) : (
										<span>loading</span>
									)}
								</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</div>
	);
};

export default MenusAfterLogin;
