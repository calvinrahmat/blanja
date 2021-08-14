import './bag.scoped.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BagList from './BagList';

const Bag = () => {
	const url = 'http://localhost:7123/bag';

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
		});
	}, [url]);
	const totalProducts = products.length;

	const { register } = useForm();

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
									<h1>grandTotal</h1>
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
