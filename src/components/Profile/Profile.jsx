import './Profile.scoped.scss';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../Logins/loginSlice';

const Profile = () => {
	const dispatch = useDispatch();
	const updateUserApi = `${process.env.REACT_APP_API}/user/profile`;
	const updateSellerApi = `${process.env.REACT_APP_API}/seller/profile`;

	const { email } = useSelector((state) => state.login);
	const getUserApi = `${process.env.REACT_APP_API}/user/${email}`;
	const getSellerApi = `${process.env.REACT_APP_API}/seller/profile/${email}`;

	const { token } = useSelector((state) => state.login);
	const [preview, setPreview] = useState('');
	const [image, setImage] = useState('');
	const [user, setUser] = useState([]);
	const { role } = useSelector((state) => state.login);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		axios
			.get(role === 'seller' ? getSellerApi : getUserApi, {
				headers: {
					tokenauth: token,
				},
			})
			.then((res) => {
				const { data } = res.data;
				const value = [];
				data.map((val) => {
					return value.push(val);
				});

				setUser(value[0]);
				reset(res.data);
			});
	}, [getUserApi, reset, role, getSellerApi, token]);

	function onImageChange(event) {
		if (event.target.files && event.target.files[0]) {
			setPreview(URL.createObjectURL(event.target.files[0]));
			setImage(event.target.files[0]);
		}
	}

	const onSubmit = (data) => {
		if (role === 'customer') {
			let formData = new FormData();
			formData.append('img', image);
			formData.append('name', data.name);
			formData.append('dob', data.dob);
			formData.append('gender', data.gender);
			formData.append('phone_number', data.phone_number);
			formData.append('user_id', user.user_id);
			const headers = {
				'Content-type': 'multipart/form-data',
			};
			axios.put(updateUserApi, formData, headers).then((res) => {
				dispatch(getProfile(res.data));
				alert('profile updated!');
			});
		} else if (role === 'seller') {
			let formData = new FormData();
			formData.append('img', image);
			formData.append('name', data.name);
			formData.append('phone_number', data.phone_number);
			formData.append('seller_id', user.seller_id);
			formData.append('store_desc', user.store_desc);
			const headers = {
				'Content-type': 'multipart/form-data',
			};
			axios.put(updateSellerApi, formData, headers).then((res) => {
				dispatch(getProfile(res.data));
				alert('profile updated!');
			});
		}
	};

	return (
		<div className="wrapper">
			<div className="title">
				<h1>My Profile</h1>
				<p>Manage your profile information</p>
				<div className="title-line"></div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="container">
					<div className="left-container">
						<div className="label">
							{role === 'customer' ? <p>Name</p> : <p>Store Name</p>}

							<p>Email</p>
							<p>Phone Number</p>

							{role === 'customer' ? (
								<>
									<p>Gender</p>
									<p>Date of Birth</p>
								</>
							) : (
								<>
									<p>Store Description </p>
								</>
							)}
						</div>
						<div className="input">
							<div className="name-wrapper">
								<div className="box-input">
									<input
										type="text"
										{...register('name')}
										defaultValue={user.name}
									/>
								</div>
							</div>
							<div className="email-wrapper">
								<div className="box-input">
									<input
										type="email"
										{...register('email')}
										disabled
										defaultValue={user.email}
									/>
								</div>
							</div>
							<div className="phone-wrapper">
								<div className="box-input">
									<input
										type="number"
										{...register('phone_number')}
										defaultValue={user.phone_number}
									/>
								</div>
							</div>
							{role === 'customer' ? (
								<>
									<div className="gender-wrapper">
										<div>
											<input
												type="radio"
												id="male"
												name="gender"
												value="male"
												defaultValue={user.gender}
												{...register('gender')}
											/>
											<label htmlFor="male">Laki-Laki</label>
										</div>

										<div>
											<input
												type="radio"
												id="female"
												name="gender"
												value="female"
												{...register('gender')}
											/>
											<label htmlFor="female">Perempuan</label>
										</div>
									</div>
									<input
										type="date"
										id="start"
										name="dob"
										defaultValue={user.dob}
										{...register('dob')}
									/>
								</>
							) : (
								<div className="form-group">
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										rows={4}
										defaultValue={user.store_desc}
										{...register('store_desc')}
									/>
									<p>{errors.product_desc?.message}</p>
								</div>
							)}
						</div>
					</div>
					<div className="middle-line"></div>
					<div className="right-container">
						<div className="photo-container">
							<div className="photo-box">
								<img src={preview ? preview : user.img} alt="profile" />
							</div>
							<div className="button-select">
								<input
									type="file"
									className="btn-change-img poppins-bold"
									id="upload-btn"
									onChange={onImageChange}
									hidden
								/>
								<label htmlFor="upload-btn" className="select-image">
									Select Image
								</label>
							</div>
						</div>
					</div>
				</div>
				<button className="button-save" style={{ marginLeft: '190px' }}>
					Save
				</button>
			</form>
		</div>
	);
};

export default Profile;
