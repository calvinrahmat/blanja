import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.scoped.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
	email: yup.string().email('please input valid email').required(),
	pass: yup.string().min(5).required(),
});
const url = 'http://localhost:7123/login/customer';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		try {
			axios.post(url, data).then((res) => {
				console.log(res.data);
			});
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<form
				id="login-customer"
				className="input-group"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					type="email"
					placeholder="Email"
					className="form-control my-1 w-100 mt-50 email-form"
					{...register('email')}
				/>
				<h3 className="error">{errors.email?.message}</h3>
				<input
					type="password"
					placeholder="Password"
					className="form-control my-3 w-100 pass-form"
					{...register('pass')}
				/>
				<h3 className="error">{errors.pass?.message}</h3>

				<p>Forgot password?</p>
				<div className="btn-box">
					<button className="btn btn-primary btn-login">Login</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
