import './Profile.scoped.scss';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const Profile = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<div className="wrapper">
			<div className="title">
				<h1>My Profile</h1>
				<p>Manage your profile information</p>
			</div>
			<div className="container">
				<div className="left-container">
					<div className="label">
						<p>Name</p>
						<p>Email</p>
						<p>Phone Number</p>
						<p>Gender</p>
						<p>Date of Birth</p>
					</div>
					<div className="input">
						<div className="name-wrapper">
							<div className="box-input">
								<input type="text" />
							</div>
						</div>
						<div className="email-wrapper">
							<div className="box-input">
								<input type="email" />
							</div>
						</div>
						<div className="phone-wrapper">
							<div className="box-input">
								<input type="number" />
							</div>
						</div>
						<div className="gender-wrapper">
							<div>
								<input
									type="radio"
									id="male"
									name="gender"
									value="male"
									checked
								/>
								<label for="male">Laki-Laki</label>
							</div>

							<div>
								<input type="radio" id="female" name="gender" value="female" />
								<label for="female">Perempuan</label>
							</div>
						</div>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							dateFormat="dd/MM/yyyy"
						/>
					</div>
				</div>

				<div className="right-container">
					<div className="img-box">
						<p>Image</p>
					</div>
					<div className="button">Select Image</div>
				</div>
			</div>
			<button className="button-save">Save</button>
		</div>
	);
};

export default Profile;
