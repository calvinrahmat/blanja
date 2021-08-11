import './bag.scoped.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Bag = () => {
	const url = 'http://localhost:7123/bag';

	//const [isChecked, setIsChecked] = useState(false);
	const [products, setProduct] = useState([]);
	const [checkedState, setCheckedState] = useState(
		new Array(products.length).fill(false)
	);

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
	const totalProducts = products.length;

	const [total, setTotal] = useState(0);
	const handleOnChange = (event) => {};
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [price, setPrice1] = useState('');
	const [count, setCount] = useState(1);
	const addItem = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const reduceItem = () => {
		if (count > 1) setCount((prevCount) => prevCount - 1);
	};
	let grandTotal = price * count;

	const onSubmit = (data) => console.log(data);

	const renderItem = (item) => {
		return (
			<div key={item.id} className="item1-container">
				<div className="wrap-checkbox-item">
					<div className="check-box">
						<input
							type="checkbox"
							defaultChecked="true"
							{...register(`checkItem`)}
						/>
					</div>
					<div className="photo-box-bag">
						<img className="product-img-bag" src={item.img} alt="item-1" />
					</div>
					<div className="item-desc">
						<h1>{item.nama}</h1>
						<p>{item.seller}</p>
					</div>
				</div>
				<div className="button-container">
					<div className="button-remove">
						<button className="material-icons remove-icon" onClick={reduceItem}>
							remove
						</button>
					</div>
					<h1>{count}</h1>
					<div className="button-remove">
						<div className="material-icons add-icon" onClick={addItem}>
							add
						</div>
					</div>
				</div>
				<div className="price">
					<h1>{item.harga}</h1>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="big-container-bag">
				<div className="bag-container">
					<div className="container left-container-bag">
						<div className="h1">My bag</div>
						<div className="select-container">
							<div className="wrap-checkbox-desc">
								<div className="check-box">
									<input type="checkbox" {...register(`selectAll}`)} />
								</div>
								<div className="select-items">
									<p>
										Select all
										<span style={{ color: '#9b9b9b' }}>
											({totalProducts} items selected)
										</span>
									</p>
								</div>
							</div>
							<div className="delete-box">
								<p>Delete</p>
							</div>
						</div>
						<div className="items-container-bag">
							<div>{products.map(renderItem)}</div>
						</div>
					</div>
					<div className="container right-container-bag">
						<div className="shopping-summary">
							<h1>Shoppping summary</h1>
							<div className="total-price">
								<div className="total-price-text">
									<p>Total price</p>
								</div>
								<div className="price">
									<h1>{grandTotal}</h1>
								</div>
							</div>
							<button className="btn btn-primary justify-content-center buy-button">
								Buy
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bag;
