import React from 'react';
import Bag from '../../components/bag/Bag';
import NavbarAfterLogin from '../../components/navbar/NavbarAfterLogin';

const BagPage = () => {
	return (
		<div>
			<NavbarAfterLogin />
			<Bag />
		</div>
	);
};

export default BagPage;
