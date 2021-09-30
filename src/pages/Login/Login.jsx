import { Link } from 'react-router-dom';
import Form from '../../components/Logins/Form';
import './login.scoped.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Login = () => {
	const [button, setButton] = useState(false);

	return (
		<>
			<div className="form-box">
				<Link to="/home">
					<img
						src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
						alt="logo blanja"
					/>
				</Link>

				<div className="title">
					<h1>Please login with your account</h1>
				</div>
				{button === false ? (
					<div className="button-box">
						<button
							className="btn btn-primary btn-customer"
							onClick={() => setButton(false)}
						>
							Customer
						</button>
						<button
							className="btn btn-primary btn-seller"
							onClick={() => setButton(true)}
						>
							Seller
						</button>
					</div>
				) : (
					<div className="button-box">
						<button
							className="btn btn-primary btn-seller"
							onClick={() => setButton(false)}
						>
							Customer
						</button>
						<button
							className="btn btn-primary btn-customer"
							onClick={() => setButton(true)}
						>
							Seller
						</button>
					</div>
				)}

				<div animate={{}}>
					<Form button={button} />
				</div>

				<Link to="/register" style={{ textDecoration: 'none' }}>
					<h2>Don't have a Blanja account? Register</h2>
				</Link>
			</div>
		</>
	);
};

export default Login;
