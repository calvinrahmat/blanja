import { Container, Col, Row } from 'react-bootstrap';
import ListInventory from '../ListInventory';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useQuery } from 'react-query';
import './AllItems.scoped.scss';

const AllItems = () => {
	const { email } = useSelector((state) => state.login);
	const url = `${process.env.REACT_APP_API}/seller/products/${email}`;

	async function getProductsData() {
		const response = await axios.get(url);
		const { data } = await response.data;
		return data;
	}

	const { data } = useQuery('inventory', getProductsData);

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
					{data ? (
						data.map(({ id, nama, harga, stock }) => (
							<ListInventory
								id={id}
								nama={nama}
								harga={harga}
								stock={stock}
								key={id}
							/>
						))
					) : (
						<span />
					)}
				</Container>
			</Container>
		</div>
	);
};

export default AllItems;
