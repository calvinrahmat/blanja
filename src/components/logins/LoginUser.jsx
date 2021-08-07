import './login.scoped.scss';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginUser = ({ setAuth }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<div className="form-box">
				<a href="./index.htm">
					<img
						src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
						alt="logo blanja"
					/>
				</a>

				<div className="title">
					<h1>Please login with your account</h1>
				</div>
				<div className="button-box">
					<div className="btn btn-primary btn-customer">Customer</div>
					<div className="btn btn-primary btn-seller">Seller</div>
				</div>
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
					<input
						type="password"
						placeholder="Password"
						className="form-control my-3 w-100 pass-form"
						{...register('pass')}
					/>

					<p>Forgot password?</p>
					<div className="btn-box">
						<button className="btn btn-primary btn-login">Login</button>
					</div>
				</form>
				<Link href="/register" style={{ textDecoration: 'none' }}>
					<h2>Don't have a Tokopedia account? Register</h2>
				</Link>
			</div>
		</>
	);
};

export default LoginUser;
