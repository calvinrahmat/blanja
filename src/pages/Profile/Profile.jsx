import React from 'react';
import NavbarHeader from '../../components/Navbar/NavbarHeader';
import SideBar from '../../components/SideBar/SideBar';
import Profile from '../../components/Profile/Profile';
import './Profile.scoped.scss';

const ProfilePage = () => {
	return (
		<div>
			<NavbarHeader />

			<div className="wrapper">
				<SideBar />
				<div className="profile-container">
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
