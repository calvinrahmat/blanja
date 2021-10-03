import './bag.scoped.scss';
import axios from 'axios';
import BagList from './BagList.jsx';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import Summary from './summary/Summary';
import { useState } from 'react';
import DeleteAllItem from './DeleteItem/DeleteAllIItem';
import SummaryBottom from './summary/SummaryBottom';

const Bag = () => {
	const { email } = useSelector((state) => state.login);
	const url = `${process.env.REACT_APP_API}/bag/${email}`;

	const [selectAll, setSelectAll] = useState(false);

	async function getBag() {
		const response = await axios.get(url);
		const { data } = await response.data;
		return data;
	}

	const { data: values, error } = useQuery('bag', getBag);

	if (!values) return <span>Loading...</span>;
	if (error) return <span>Error retrieving data</span>;

	const totalProducts = values.length;
	const totalPrice = values.reduce(function (acc, curr) {
		return acc + curr.total;
	}, 0);

	const onCheck = () => {
		setSelectAll(!selectAll);
	};

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
									<input type="checkbox" onChange={onCheck} />
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
								<DeleteAllItem email={email} />
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
										selectAll={selectAll}
									/>
								))}
							</div>
						</div>
						<SummaryBottom totalPrice={totalPrice} />
					</div>
					<div className="container right-container-bag">
						<Summary totalPrice={totalPrice} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Bag;
