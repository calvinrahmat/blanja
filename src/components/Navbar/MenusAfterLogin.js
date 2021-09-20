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
import { getUserImage, getUserName } from '../Home/userSlice';
import axios from 'axios';
import { getBagQty } from '../Bag/BagSlice';

const MenusAfterLogin = () => {
	const [user, setUser] = useState('');
	const { profile } = useSelector((state) => state.user);
	const { bagItem } = useSelector((state) => state.bag);
	console.log(bagItem);
	const { email } = useSelector((state) => state.login);
	const url = `${process.env.REACT_APP_API}/bag/${email}`;

	const dispatch = useDispatch();
	const urlUser = `${process.env.REACT_APP_API}/user/${email}`;
	const [products, setProduct] = useState([]);

	useEffect(() => {
		axios.get(urlUser).then((res) => {
			console.log(res.data);

			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});

			if (value) setUser(value);
			dispatch(getUserName(value[0].name));
			dispatch(getUserImage(value[0].img));
		});
	}, [urlUser, dispatch]);

	useEffect(() => {
		axios.get(url).then((res) => {
			const { data } = res.data;

			const value = [];
			data.map((val) => {
				return value.push(val);
			});
			setProduct(value);
		});
	}, [url, dispatch]);

	const totalQty = products.reduce(function (acc, curr) {
		return acc + curr.qty;
	}, 0);
	dispatch(getBagQty(totalQty));

	const { userImage } = useSelector((state) => state.user);
	const { qty } = useSelector((state) => state.bag);

	return (
		<div>
			<Container>
				<Nav className="me-auto menu-after-login">
					<Link to="/bag">
						<Container className="menu-icon-cart">
							{qty ? <div className="bubble">{qty}</div> : <span />}

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
								<img src={userImage} alt="profile" />
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
									{user ? <span>My Profile</span> : <span>loading</span>}
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
