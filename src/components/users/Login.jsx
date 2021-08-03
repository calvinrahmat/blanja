import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: '',
		pass: '',
	});
	const { email, pass, name } = inputs;
	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { email, pass, name };
			axios.post('http://localhost:7123/login/customer', body).then((res) => {
				localStorage.setItem('token', res.data.data[0].token);
				console.log(res.data);
				setAuth(true);
				if (!res.data) {
					console.log('no data');
				}
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	axios.interceptors.request.use(
		(config) => {
			console.log(
				`${config.method.toUpperCase()} request send to ${
					config.url
				} at ${new Date().getTime()}`
			);

			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	return (
		<>
			<h1 className="text-center my-5">Login</h1>
			<form onSubmit={onSubmitForm}>
				<input
					type="email"
					name="email"
					placeholder="email"
					className="form-control my-3"
					value={email}
					onChange={(e) => onChange(e)}
				/>
				<input
					type="password"
					name="pass"
					placeholder="password"
					className="form-control my-3"
					value={pass}
					onChange={(e) => onChange(e)}
				/>
				<button className="btn btn-success btn-block">Submit</button>
			</form>
		</>
	);
};

export default Login;
