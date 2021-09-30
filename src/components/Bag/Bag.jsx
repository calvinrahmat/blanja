import './bag.scoped.scss';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import BagList from './BagList.jsx';
import NumberFormat from 'react-number-format';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';

const Bag = () => {
	const { email } = useSelector((state) => state.login);
	const url = `${process.env.REACT_APP_API}/bag/${email}`;

	async function getBag() {
		const response = await axios.get(url);
		const { data } = await response.data;
		return data;
	}

	const { data: values, error } = useQuery('bag', getBag);

	const { register } = useForm();
	if (!values) return <span>Loading...</span>;
	if (error) return <span>Error retrieving data</span>;

	const totalProducts = values.length;
	const totalPrice = values.reduce(function (acc, curr) {
		return acc + curr.total;
	}, 0);

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
								{values.map(({ id, nama, seller, bag_id, qty, harga, img }) => (
									<BagList
										id={id}
										nama={nama}
										seller={seller}
										bag_id={bag_id}
										qty={qty}
										harga={harga}
										img={img}
										key={bag_id}
									/>
								))}
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
