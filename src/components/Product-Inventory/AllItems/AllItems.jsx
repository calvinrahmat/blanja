import { Container, Col, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllItems.scope.scss';

const AllItems = () => {
	return (
		<div>
			<Container className="product-table">
				<Container className="header">
					<Row className="title">
						<Col sm={6}>Product Name</Col>
						<Col sm={2}>Price</Col>
						<Col sm={2}>Stock</Col>
					</Row>
				</Container>
				<Container className="product-list">
					{/* <img
						src="https://res.cloudinary.com/calvin-cloud/image/upload/v1628378751/Front%20End/No_product_cljgjt.svg"
						alt="no product"
					/> */}
					<Nav.Link
						href={`/seller/edit-product`}
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<Row className="title">
							<Col sm={6}>Product</Col>
							<Col sm={2}>10000</Col>
							<Col sm={2}>100</Col>
							<Col sm={2}>
								<button className="btn-danger edit-btn">Edit</button>
							</Col>
						</Row>
					</Nav.Link>
				</Container>
			</Container>
		</div>
	);
};

export default AllItems;
