import { Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NewItemCards.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const NewItemCards = () => {
	const url = 'http://localhost:7123/products';

	const [products, setProduct] = useState([]);

	useEffect(() => {
		axios.get(url).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				value.push(val);
			});
			setProduct(value);
		});
	}, [url]);

	const renderCard = (card, index) => {
		return (
			<Col>
				<Card key={index} className="box">
					<Card.Img className="img" variant="top" src={card.img} />
					<Card.Body>
						<Card.Title className="title">{card.nama}</Card.Title>
						<Card.Title className="price">Rp {card.harga}</Card.Title>
						<Card.Title className="seller"> {card.seller}</Card.Title>
					</Card.Body>
				</Card>
			</Col>
		);
	};

	return (
		<>
			<Container className="products">
				<h1>New</h1>
				<h2>You’ve never seen it before!</h2>
				<div className="grid">{products.map(renderCard)}</div>
			</Container>
		</>
	);
};

export default NewItemCards;
