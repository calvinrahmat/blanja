import './bag.scoped.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BagList from './BagList.jsx';
import NumberFormat from 'react-number-format';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getBagItem } from './BagSlice';

const Bag = () => {
	const { email } = useSelector((state) => state.login);
	const url = `${process.env.REACT_APP_API}/bag/${email}`;
	const dispatch = useDispatch();

	//const [isChecked, setIsChecked] = useState(false);
	const [products, setProduct] = useState([]);

	useEffect(() => {
		axios.get(url).then((res) => {
			const { data } = res.data;

			const value = [];
			data.map((val) => {
				return value.push(val);
			});
			setProduct(value);
			dispatch(getBagItem(value));
		});
	}, [url, dispatch]);

	const totalProducts = products.length;
	const totalPrice = products.reduce(function (acc, curr) {
		return acc + curr.total;
	}, 0);
	console.log(totalPrice);
	const { register } = useForm();

	return (
		<>
			<div className="big-container-bag">
				<div className="bag-container">
					<div className="container left-container-bag">
						<div className="title">
							<p>My Bag</p>
						</div>
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
							<div>
								<BagList products={products} />
							</div>
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
									<h1>
										<NumberFormat
											value={totalPrice}
											displayType={'text'}
											thousandSeparator={'.'}
											decimalSeparator={','}
											prefix={'Rp'}
										/>
									</h1>
								</div>
							</div>
							<motion.button
								className="btn btn-primary justify-content-center buy-button"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								style={{
									borderRadius: '25px',
									background: '#db3022',
									border: 'none',
								}}
							>
								Buy
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bag;
