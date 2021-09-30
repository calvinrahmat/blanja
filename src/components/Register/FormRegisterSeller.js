import React from 'react';
import { useForm } from 'react-hook-form';
import './FormRegisterSeller.scoped.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router';

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email('please input valid email').required(),
	phone_number: yup.number().required(),
	store_name: yup.string().required(),
	pass: yup.string().min(5).required(),
	confirmPass: yup.string().oneOf([yup.ref('pass'), null]),
});
const url = `${process.env.REACT_APP_API}/seller/registration`;

const FormRegisterSeller = () => {
	const history = useHistory();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		console.log(data);
		try {
			axios.post(url, data).then((res) => {
				res.data.data[0].msg === 'register failed email already registered'
					? alert('email sudah terdaftar !')
					: history.push('/login');
			});
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<form
				id="register-customer"
				className="input-group"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					type="text"
					placeholder="Name"
					className="form-control my-2 w-100 mt-50 email-form"
					{...register('name')}
				/>
				<input
					type="email"
					placeholder="Email"
					className="form-control my-2 w-100 mt-50 email-form"
					{...register('email')}
				/>
				<input
					type="number"
					placeholder="Phone Number"
					className="form-control my-2 w-100 mt-50 email-form"
					{...register('phone_number')}
				/>
				<input
					type="text"
					placeholder="Store Name"
					className="form-control my-2 w-100 mt-50 email-form"
					{...register('store_name')}
				/>

				<input
					type="password"
					placeholder="Password"
					className="form-control my-2 w-100 pass-form"
					{...register('pass')}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					className="form-control my-2 w-100 pass-form"
					{...register('confirmPass')}
				/>
				<h3 className="error">
					{errors.confirmPass && "Password don't match!"}
				</h3>
				<div className="btn-box">
					<button className="btn btn-primary btn-register">Register</button>
				</div>
			</form>
		</div>
	);
};

export default FormRegisterSeller;
