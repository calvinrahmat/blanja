import React from 'react';
import './MyProduct.scoped.scss';
import { FaSearch } from 'react-icons/fa';
import AllItems from './AllItems/AllItems';

const MyProduct = () => {
	return (
		<div>
			<div className="wrapper">
				<div className="header-title">
					<h1>My Product</h1>
				</div>

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
				<div className="all-items">
					<AllItems />
				</div>
			</div>
		</div>
	);
};

export default MyProduct;
