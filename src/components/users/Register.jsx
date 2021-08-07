import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Register = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: '',
		pass: '',
		name: '',
	});
	const { email, pass, name } = inputs;
	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { email, pass, name };
			axios()
				.post('http://localhost:7123/user/registration', body)
				.then((res) => {
					localStorage.setItem('token', res.data.data[0].pass);
				});
			setAuth(true);
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
			<h1 className="text-center my-5">Register</h1>
			<Container className="d-flex justify-content-center align-items-center">
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
					<input
						type="text"
						name="name"
						placeholder="name"
						className="form-control my-3"
						value={name}
						onChange={(e) => onChange(e)}
					/>
					<button className="btn btn-success btn-block">Submit</button>
				</form>
			</Container>
		</>
	);
};

export default Register;
