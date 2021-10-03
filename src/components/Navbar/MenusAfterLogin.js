import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaBell, FaEnvelope } from 'react-icons/fa';
import './style/MenusAfterLogin.scoped.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../Logins/loginSlice';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getUserImage, getUserName } from '../Home/userSlice';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';

const MenusAfterLogin = () => {
	const history = useHistory();
	const { role } = useSelector((state) => state.login);
	const dispatch = useDispatch();
	const [user, setUser] = useState('');
	const [newImage, setNewImage] = useState('');
	const { profile } = useSelector((state) => state.login);
	const { email } = useSelector((state) => state.login);
	const getTotalQty = `${process.env.REACT_APP_API}/bag/totalqty/${email}`;
	const getUserApi = `${process.env.REACT_APP_API}/user/${email}`;
	const getSellerApi = `${process.env.REACT_APP_API}/seller/profile/${email}`;

	useEffect(() => {
		if (profile && role === 'customer') {
			setNewImage(profile.data[0].data.img);
		} else if (profile && role === 'seller') {
			setNewImage(profile.data[0].img);
		}
	}, [profile, role]);

	useEffect(() => {
		axios.get(role === 'seller' ? getSellerApi : getUserApi).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});

			if (value) setUser(value);
			dispatch(getUserName(value[0].name));
			dispatch(getUserImage(value[0].img));
		});
	}, [getSellerApi, dispatch, getUserApi, role]);

	async function totalQty() {
		const response = await axios.get(getTotalQty);
		const { data } = await response.data;
		return data[0].total_qty;
	}

	const onPush = () => history.push('/seller/inventory');

	const { data: totalBagQty } = useQuery('qty', totalQty);

	const { userImage } = useSelector((state) => state.user);
	return (
		<div>
			<Container>
				<Nav className="me-auto menu-after-login">
					{role === 'seller' ? (
						<span />
					) : (
						<LinkContainer to="/bag">
							<Container className="menu-icon-cart">
								{totalBagQty ? (
									<div className="bubble">{totalBagQty}</div>
								) : (
									<span />
								)}

								<FaShoppingCart />
							</Container>
						</LinkContainer>
					)}

					<Nav>
						<Container className="menu-icon">
							<FaBell />
						</Container>
					</Nav>
					<Nav>
						<Container className="menu-icon">
							<FaEnvelope />
						</Container>
					</Nav>
					<Dropdown>
						<Nav className="photo-box">
							<Dropdown.Toggle variant="none">
								<img src={newImage ? newImage : userImage} alt="profile" />
							</Dropdown.Toggle>
						</Nav>
						<Dropdown.Menu>
							<Dropdown.Item onClick={() => dispatch(logout())}>
								Logout
							</Dropdown.Item>

							<Dropdown.Item>
								<LinkContainer
									to="/profile"
									style={{ textDecoration: 'none', color: 'black' }}
								>
									{user ? <span>My Profile</span> : <span>loading</span>}
								</LinkContainer>
							</Dropdown.Item>
							{role === 'seller' ? (
								<Dropdown.Item onClick={onPush}>My Inventory</Dropdown.Item>
							) : (
								<span />
							)}
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</div>
	);
};

export default MenusAfterLogin;
