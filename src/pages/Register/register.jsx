import { Link } from 'react-router-dom';

import FormRegister from '../../components/Register/FormRegister.js';
import './register.scoped.scss';

const Register = ({ setAuth }) => {
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
					<h1>Please sign up with your account</h1>
				</div>
				<div className="button-box">
					<div className="btn btn-primary btn-customer">Customer</div>
					<div className="btn btn-primary btn-seller">Seller</div>
				</div>
				<FormRegister />
			</div>
		</>
	);
};

export default Register;
