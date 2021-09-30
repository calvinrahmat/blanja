import { Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './SearchItemCards.scoped.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import {
	nameAsc,
	nameDesc,
	newProduct,
	oldProduct,
	priceHigh,
	priceLow,
} from '../../../../helpers/sortFunction';

const SearchItem = () => {
	const dispatch = useDispatch();
	const search = useSelector((state) => state.search.search);
	const url = `${process.env.REACT_APP_API}/products/search/nama`;
	const urlGetAll = `${process.env.REACT_APP_API}/products`;
	const [products, setProduct] = useState([]);

	const { priceHighToLow } = useSelector((state) => state.sort);
	const { priceLowToHigh } = useSelector((state) => state.sort);
	const { nameAscending } = useSelector((state) => state.sort);
	const { nameDescending } = useSelector((state) => state.sort);
	const { sortProductNew } = useSelector((state) => state.sort);
	const { sortProductOld } = useSelector((state) => state.sort);

	useEffect(() => {
		axios.get(url, { params: { p: search.name } }).then((res) => {
			const { data } = res.data;
			const value = [];

			data.map((val) => {
				return value.push(val);
			});
			if (priceLowToHigh === true) {
				value.sort(priceLow);
				setProduct(value);
			} else if (priceHighToLow === true) {
				value.sort(priceHigh);
				setProduct(value);
			} else if (nameAscending === true) {
				value.sort(nameAsc);
				setProduct(value);
			} else if (nameDescending === true) {
				value.sort(nameDesc);
				setProduct(value);
			} else if (sortProductNew === true) {
				value.sort(newProduct);
				setProduct(value);
			} else if (sortProductOld === true) {
				value.sort(oldProduct);
				setProduct(value);
			} else {
				setProduct(value);
			}
		});
	}, [
		url,
		search,
		urlGetAll,
		dispatch,
		priceHighToLow,
		priceLowToHigh,
		nameAscending,
		nameDescending,
		sortProductNew,
		sortProductOld,
	]);
	console.log(products);

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
			</Col>
		);
	};

	return (
		<>
			<Container className="products">
				<div className="grid">{products.map(renderCard)}</div>
			</Container>
		</>
	);
};

export default SearchItem;
