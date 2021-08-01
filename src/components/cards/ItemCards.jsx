import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ItemCards.scss';

const ItemCards = () => {
	const cardInfo = [
		{
			image:
				'https://res.cloudinary.com/calvin-cloud/image/upload/v1627351607/Front%20End/Mask_Group_dyzplu.svg',
			title: '1',
			text: 'text1',
		},
		{
			image:
				'https://res.cloudinary.com/calvin-cloud/image/upload/v1627351607/Front%20End/Mask_Group_dyzplu.svg',
			title: '2',
			text: 'text2',
		},
		{
			image:
				'https://res.cloudinary.com/calvin-cloud/image/upload/v1627351607/Front%20End/Mask_Group_dyzplu.svg',
			title: '3',
			text: 'text3',
		},
		{
			image:
				'https://res.cloudinary.com/calvin-cloud/image/upload/v1627351607/Front%20End/Mask_Group_dyzplu.svg',
			title: '4',
			text: 'text4',
		},
		{
			image:
				'https://res.cloudinary.com/calvin-cloud/image/upload/v1627351607/Front%20End/Mask_Group_dyzplu.svg',
			title: '5',
			text: 'text4',
		},
	];

	const renderCard = (card, index) => {
		return (
			<Card style={{ width: '208px' }} key={index} className="box">
				<Card.Img variant="top" src={card.image} />
				<Card.Body>
					<Card.Title>{card.title}</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		);
	};

	return (
		<Container className="cards-container">
			<div className="d-md-flex flex-wrap justify-space-evenly">
				{cardInfo.map(renderCard)}
			</div>
		</Container>
	);
};

export default ItemCards;
