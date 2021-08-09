import { Card, Col, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './PopularItemCards.scoped.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const PopularItemCards = () => {
	const url = `${process.env.REACT_APP_API}/products`;

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
					<Nav.Link href={`/product/${card.id}`}>
						<Card.Img className="img" variant="top" src={card.img} />
					</Nav.Link>

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
				<h1>Popular</h1>
				<h2>Find clothes that are trending recently</h2>
				<div className="grid">{products.map(renderCard)}</div>
			</Container>
		</>
	);
};

export default PopularItemCards;
