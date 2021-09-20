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
	const { email } = useSelector((state) => state.login);
	const [preview, setPreview] = useState('');
	const [image, setImage] = useState('');
	const [user, setUser] = useState([]);
	const updateUserApi = `${process.env.REACT_APP_API}/user/profile`;
	const getUserApi = `${process.env.REACT_APP_API}/user/${email}`;
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		axios.get(getUserApi).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});

			setUser(value[0]);
			reset(res.data);
		});
	}, [getUserApi, reset]);

	function onImageChange(event) {
		if (event.target.files && event.target.files[0]) {
			setPreview(URL.createObjectURL(event.target.files[0]));
			setImage(event.target.files[0]);
		}
	}
	console.log(preview);

	const onSubmit = (data) => {
		console.log(data);
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
			console.log(res.data);
			dispatch(getProfile(res.data));
			alert('profile updated!');
			window.location.reload(true);
		});
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
							<p>Name</p>
							<p>Email</p>
							<p>Phone Number</p>
							<p>Gender</p>
							<p>Date of Birth</p>
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
				<button className="button-save">Save</button>
			</form>
		</div>
	);
};

export default Profile;
