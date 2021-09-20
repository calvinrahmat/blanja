import { useForm } from 'react-hook-form';
import './Form.scoped.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { loginPending, loginSuccess, loginFail, getEmail } from './loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { getProfile } from './loginSlice';

const schema = yup.object().shape({
	email: yup.string().email('please input valid email').required(),
	pass: yup.string().min(5).required(),
});
const url = `${process.env.REACT_APP_API}/login/customer`;

const Form = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isLoading, error } = useSelector((state) => state.login);
	const [user, setUser] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		try {
			axios.post(url, data).then((res) => {
				const { msg, token, email } = res.data.data[0];
				console.log(res.data.data[0]);

				console.log(msg);
				if (msg === 'Login Success') {
					sessionStorage.setItem('token', token);
					dispatch(loginSuccess());
					dispatch(getEmail(email));
					history.push('/home');
				} else {
					dispatch(loginFail('invalid password or email'));
					alert('wrong password or email');
				}
			});
		} catch (error) {
			dispatch(loginFail(error.message));
			console.log(error.message);
		}
		dispatch(loginPending());
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
					<button className="btn btn-primary btn-login">
						{isLoading ? (
							<Spinner variant="primary" animation="border" />
						) : (
							<span>Login</span>
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
