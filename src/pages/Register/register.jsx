import { Link } from 'react-router-dom';
import { useState } from 'react';

import FormRegister from '../../components/Register/FormRegister.js';
import './register.scoped.scss';
import FormRegisterSeller from '../../components/Register/FormRegisterSeller.js';

const Register = () => {
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
					<h1>Please sign up with your account</h1>
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
				{button === false ? <FormRegister /> : <FormRegisterSeller />}
			</div>
		</>
	);
};

export default Register;
