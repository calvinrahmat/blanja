import { Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NewItemCards.scoped.scss';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { motion } from 'framer-motion';
import { getCard } from '../../../../APIs/cardsApi';

const NewItemCards = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCard());
	}, [dispatch]);
	const { list } = useSelector((state) => state.card);

	const renderCard = (card) => {
		return (
			<Col key={card.id}>
				<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<Card className="box">
						<Link to={`/product/${card.id}`}>
							<Card.Img className="img skeleton" variant="top" src={card.img} />
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
								<NumberFormat
									value={card.harga}
									displayType={'text'}
									thousandSeparator={'.'}
									decimalSeparator={','}
									prefix={'Rp'}
								/>
							</Card.Title>
							<Card.Title className="seller"> {card.seller}</Card.Title>
						</Card.Body>
					</Card>
				</motion.div>
			</Col>
		);
	};

	return (
		<>
			<Container className="products">
				<h1>New</h1>

				<h2>You’ve never seen it before!</h2>
				<div className="grid">{list.map(renderCard)}</div>
			</Container>
		</>
	);
};

export default NewItemCards;
