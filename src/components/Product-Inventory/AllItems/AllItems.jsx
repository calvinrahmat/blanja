import { Container, Col, Row } from 'react-bootstrap';
import ListInventory from '../ListInventory';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import './AllItems.scoped.scss';

const AllItems = () => {
	const { email } = useSelector((state) => state.login);
	const url = `${process.env.REACT_APP_API}/seller/products/${email}`;
	const [list, setList] = useState([]);

	useEffect(() => {
		axios.get(url).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});
			setList(value);
		});
	}, [url]);

	return (
		<div>
			<Container className="product-table">
				<Container className="header">
					<Row className="title">
						<Col sm={4}>Product Name</Col>
						<Col sm={2}>Price</Col>
						<Col sm={2}>Stock</Col>
					</Row>
				</Container>
				<Container className="product-list">
					<ListInventory list={list} />
				</Container>
			</Container>
		</div>
	);
};

export default AllItems;
