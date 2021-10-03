import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import './BagList.scoped.scss';
import { useMutation } from 'react-query';
import { queryClient } from '../../index';
import { updateBagItemQty } from '../../APIs/bagApi';
import DeleteItem from './DeleteItem/DeleteItem';
import { useState } from 'react';

const BagList = ({ id, nama, seller, bag_id, qty, harga, img, selectAll }) => {
	const [checked, setChecked] = useState(selectAll);

	const onCheck = () => {
		setChecked(!checked);
	};
	const { mutate } = useMutation(updateBagItemQty, {
		onMutate: async (newBag) => {
			await queryClient.cancelQueries(['bag', newBag.id]);

			const prevBag = queryClient.getQueryData(['bag', newBag.id]);

			queryClient.setQueryData(['bag', newBag.id], newBag);

			return { prevBag, newBag };
		},
		onError: (err, newBag, context) => {
			queryClient.setQueryData(['bag', context.newBag.id], context.prevBag);
		},
		onSettled: (newBag) => {
			queryClient.invalidateQueries(['bag', newBag.id]);
			queryClient.invalidateQueries('qty');
		},
	});

	const addQty = async () => {
		await mutate({ bag_id: bag_id, qty: qty + 1, img: img });
	};

	const reduceQty = async () => {
		await mutate({ bag_id: bag_id, qty: qty - 1, img: img });
	};

	return (
		<div>
			<div key={bag_id} className="item1-container">
				<form className="bag-list"></form>
				<div className="check-box">
					<input
						type="checkbox"
						className="checkBox"
						checked={selectAll}
						onChange={onCheck}
					/>
				</div>
				<Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
					<div className="wrap-checkbox-item">
						<div className="photo-box-bag">
							<img className="product-img-bag" src={img} alt="item" />
						</div>
						<div className="item-desc">
							<h1>{nama}</h1>
							<p>{seller}</p>
						</div>
					</div>
				</Link>
				<div className="qty-price">
					<div className="delete-button">
						<DeleteItem bag_id={bag_id} />
					</div>
					<div className="button-container">
						<div className="button-remove">
							{qty > 1 ? (
								<button
									className="material-icons remove-icon"
									onClick={reduceQty}
									id={bag_id}
								>
									remove
								</button>
							) : (
								<button
									className="material-icons remove-icon"
									onClick={reduceQty}
									id={bag_id}
									disabled
								>
									remove
								</button>
							)}
						</div>
						<h1>{qty}</h1>
						<div className="button-remove">
							<button
								className="material-icons add-icon"
								onClick={addQty}
								id={bag_id}
							>
								add
							</button>
						</div>
					</div>
					<div className="price">
						<h1>
							<NumberFormat
								value={harga}
								displayType={'text'}
								thousandSeparator={'.'}
								decimalSeparator={','}
								prefix={'Rp'}
							/>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BagList;
