import React from 'react';
import { Container } from 'react-bootstrap';
import './MyProduct.scope.scss';
import { FaSearch } from 'react-icons/fa';
import AllItems from './AllItems/AllItems';

const MyProduct = () => {
	return (
		<div>
			<Container className="wrapper">
				<Container className="header-title">
					<h1>My Product</h1>
				</Container>

				<div className="menus">
					<ul>
						<li>All Items</li>
						<li>Sold Out</li>
						<li>Archived</li>
					</ul>
				</div>

				<div className="search-box">
					<div className="search-box">
						<FaSearch className="search-icon" />
					</div>
					<input type="text" className="search-bar" placeholder="Search" />
				</div>
				<Container className="all-items">
					<AllItems />
				</Container>
			</Container>
		</div>
	);
};

export default MyProduct;
