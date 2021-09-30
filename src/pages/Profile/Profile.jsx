import React from 'react';
import NavbarHeader from '../../components/Navbar/NavbarHeader';
import Sidebar from '../../components/SideBar/Sidebar';
import Profile from '../../components/Profile/Profile';
import './Profile.scoped.scss';

const ProfilePage = () => {
	return (
		<div>
			<NavbarHeader />

			<div className="wrapper">
				<div className="left-container">
					<Sidebar />
				</div>
				<div className="profile-container">
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
