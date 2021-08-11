import { Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NewItemCards.scoped.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewItemCards = () => {
	const { search } = useSelector((state) => state.search);
	console.log(search);
	const url = `${process.env.REACT_APP_API}/products/search/nama`;
	const [products, setProduct] = useState([]);

	useEffect(() => {
		axios.get(url, { params: { p: 'shirt' } }).then((res) => {
			const { data } = res.data;
			const value = [];

			data.map((val) => {
				return value.push(val);
			});
			if (value) setProduct(value);
		});
	}, [url]);

	console.log(products);

	const renderCard = (card) => {
		return (
			<Col key={card.id}>
				<Card className="box">
					<Link to={`/product/${card.id}`}>
						<Card.Img className="img" variant="top" src={card.img} />
					</Link>

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
