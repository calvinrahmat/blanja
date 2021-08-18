import { Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NewItemCards.scoped.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const NewItemCards = () => {
	const dispatch = useDispatch();
	const { search } = useSelector((state) => state.search.search);
	const url = `${process.env.REACT_APP_API}/products/search/nama`;
	const urlGetAll = `${process.env.REACT_APP_API}/products`;
	const [products, setProduct] = useState([]);

	useEffect(() => {
		if (search.length > 1) {
			axios.get(url, { params: { p: search } }).then((res) => {
				const { data } = res.data;
				const value = [];

				data.map((val) => {
					return value.push(val);
				});
				if (value) setProduct(value);
			});
		} else {
			axios.get(urlGetAll).then((res) => {
				const { data } = res.data;
				const value = [];

				data.map((val) => {
					return value.push(val);
				});
				if (value) setProduct(value);
			});
		}
	}, [url, search, urlGetAll, dispatch]);

	const renderCard = (card) => {
		return (
			<Col key={card.id}>
				<Card className="box">
					<Link to={`/product/${card.id}`}>
						<Card.Img className="img" variant="top" src={card.img} />
					</Link>

					<Card.Body className="cardBody">
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
						<Card.Title
							className="price"
							style={{
								fontSize: '18px',
							}}
						>
							Rp {card.harga}
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
				<h1>New</h1>

				<h2>You’ve never seen it before!</h2>
				<div className="grid">{products.map(renderCard)}</div>
			</Container>
		</>
	);
};

export default NewItemCards;
