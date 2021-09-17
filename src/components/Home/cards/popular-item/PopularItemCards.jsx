import { Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './PopularItemCards.scoped.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const PopularItemCards = () => {
	const url = `${process.env.REACT_APP_API}/products`;

	const [products, setProduct] = useState([]);

	useEffect(() => {
		axios.get(url).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});
			setProduct(value);
		});
	}, [url]);

	const renderCard = (card) => {
		return (
			<Col key={card.id}>
				<Card className="box">
					<Link to={`/product/${card.id}`}>
						<Card.Img className="img" variant="top" src={card.img} />
					</Link>

					<Card.Body>
						<Card.Title
							className="title"
							style={{
								overflow: 'hidden',

								textOverflow: 'ellipsis',
								fontSize: '18px',
								width: '150px',
								height: '100px',
							}}
						>
							{card.nama}
						</Card.Title>
						<Card.Title className="price">
							<NumberFormat
								value={card.harga}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'Rp'}
							/>
						</Card.Title>
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
