import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import './BagList.scoped.scss';
import { useSelector } from 'react-redux';
import axios from 'axios';

const BagList = (props) => {
	const url = `${process.env.REACT_APP_API}/bag/updateqty`;
	const deleteBag = `${process.env.REACT_APP_API}/bag/del`;
	const products = props.products;

	const [qty, setQty] = useState('');
	const [bagId, setBagId] = useState('');

	const addItem = async (bag_id, qty) => {
		let addedQty = qty + 1;
		console.log(addedQty);

		const updateQty = {
			bag_id: bag_id,
			qty: addedQty,
		};
		if (qty >= 1) {
			try {
				axios.put(url, updateQty).then((res) => {
					console.log(res.data);
					window.location.reload(true);
				});
			} catch (error) {
				console.error(error.message);
			}
		}
	};

	const reduceItem = async (bag_id, qty) => {
		let addedQty = qty - 1;
		console.log(addedQty);

		const updateQty = {
			bag_id: bag_id,
			qty: addedQty,
		};
		if (qty >= 1) {
			try {
				axios.put(url, updateQty).then((res) => {
					console.log(res.data);
					window.location.reload(true);
				});
			} catch (error) {
				console.error(error.message);
			}
		}
	};

	const deleteItem = async (bag_id) => {
		try {
			axios.delete(deleteBag, { params: { id: bag_id } }).then((res) => {
				console.log(res.data);
				window.location.reload(true);
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div>
			{products.map((item, index) => (
				<div key={index} className="item1-container">
					<form className="bag-list" onSubmit={handleSubmit(onSubmit)}></form>
					<div className="check-box">
						<input
							type="checkbox"
							className="checkBox"
							defaultChecked="true"
							{...register(`checkItem`)}
						/>
					</div>
					<Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
						<div className="wrap-checkbox-item">
							<div className="photo-box-bag">
								<img className="product-img-bag" src={item.img} alt="item" />
							</div>
							<div className="item-desc">
								<h1>{item.nama}</h1>
								<p>{item.seller}</p>
							</div>
						</div>
					</Link>
					<div className="qty-price">
						<div className="button-container">
							<div className="delete-button">
								<button
									className="material-icons delete-icon"
									onClick={() => deleteItem(item.bag_id)}
									id={item.bag_id}
								>
									delete
								</button>
							</div>
							<div className="button-remove">
								{item.qty > 1 ? (
									<button
										className="material-icons remove-icon"
										onClick={() => reduceItem(item.bag_id, item.qty)}
										id={item.bag_id}
									>
										remove
									</button>
								) : (
									<button
										className="material-icons remove-icon"
										onClick={() => reduceItem(item.bag_id, item.qty)}
										id={item.bag_id}
										disabled
									>
										remove
									</button>
								)}
							</div>
							<h1>{item.qty}</h1>
							<div className="button-remove">
								<button
									className="material-icons add-icon"
									onClick={() => addItem(item.bag_id, item.qty)}
									id={item.bag_id}
								>
									add
								</button>
							</div>
						</div>
						<div className="price">
							<h1>
								<NumberFormat
									value={item.harga}
									displayType={'text'}
									thousandSeparator={'.'}
									decimalSeparator={','}
									prefix={'Rp'}
								/>
							</h1>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BagList;
