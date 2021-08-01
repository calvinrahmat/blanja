import './login.scss';

const LoginUser = () => {
	return (
		<>
			<div className="form-box">
				<div className="logo">
					<a href="./index.htm">
						<img
							src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"
							alt="logo blanja"
						/>
					</a>
				</div>
				<div className="title">
					<h1>Please login with your account</h1>
				</div>
				<div className="button-box">
					<div id="button" />
					<button
						id="tog-cust"
						type="button"
						className="toggle-button"
						onclick="loginCustomer()"
					>
						Customer
					</button>
					<button
						id="tog-seller"
						type="button"
						className="toggle-button"
						onclick="loginSeller()"
					>
						Seller
					</button>
				</div>
				<form id="login-customer" className="input-group">
					<input
						type="text"
						className="input-field"
						placeholder="Email"
						required
					/>
					<input
						type="text"
						className="input-field"
						placeholder="Password"
						required
					/>
					<button type="submit" className="submit-button">
						Login
					</button>
				</form>
				<form id="login-seller" className="input-group">
					<input
						type="text"
						className="input-field"
						placeholder="Email"
						required
					/>
					<input
						type="text"
						className="input-field"
						placeholder="Password"
						required
					/>
					<button type="submit" className="submit-button">
						Login
					</button>
				</form>
				<p className="text-forgot" id="forgot-pass-cust">
					<a href="#" className="link-forgot-pass">
						Forgot password?
					</a>
				</p>
				<p className="tokopedia" id="tokopedia-cust">
					Don't have a Tokopedia account?
					<a href="#" className="register">
						Register
					</a>
				</p>
			</div>
		</>
	);
};

export default LoginUser;
