import { Link } from 'react-router-dom';
import Form from '../../components/Logins/Form';
import './login.scoped.scss';

const Login = ({ setAuth }) => {
	return (
		<>
			<div className="form-box">
				<Link to href="/home">
					<img
						src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
						alt="logo blanja"
					/>
				</Link>

				<div className="title">
					<h1>Please login with your account</h1>
				</div>
				<div className="button-box">
					<div className="btn btn-primary btn-customer">Customer</div>
					<div className="btn btn-primary btn-seller">Seller</div>
				</div>
				<Form />

				<Link to href="/register" style={{ textDecoration: 'none' }}>
					<h2>Don't have a Blanja account? Register</h2>
				</Link>
			</div>
		</>
	);
};

export default Login;
