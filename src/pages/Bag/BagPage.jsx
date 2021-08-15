import React from 'react';
import Bag from '../../components/Bag/Bag';
import NavbarHeader from '../../components/Navbar/NavbarHeader';
import './BagPage.scoped.scss';

const BagPage = () => {
	return (
		<div>
			<NavbarHeader />
			<div className="wrapper">
				<Bag />
			</div>
		</div>
	);
};

export default BagPage;
