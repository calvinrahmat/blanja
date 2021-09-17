import { useState } from 'react';
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import './BagList.scoped.scss';

const BagList = (props) => {
	const products = props.products;
	const [count, setCount] = useState(products.qty);

	const addItem = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const reduceItem = () => {
		if (count > 1) setCount((prevCount) => prevCount - 1);
	};
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div>
			{products.map((item) => (
				<div key={item.id} className="item1-container">
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
							<div className="button-remove">
								<button
									className="material-icons remove-icon"
									onClick={(e) => reduceItem(e, item.id)}
									id={item.id}
								>
									remove
								</button>
							</div>
							<h1 defaultValue={item.qty}>{item.qty}</h1>
							<div className="button-remove">
								<button
									className="material-icons add-icon"
									onClick={(e) => addItem(e, item.id)}
									id={item.id}
								>
									add
								</button>
							</div>
						</div>
						<div className="price">
							<h1>
								<NumberFormat
									value={item.total}
									displayType={'text'}
									thousandSeparator={true}
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
