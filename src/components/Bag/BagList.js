import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './BagList.scoped.scss';

const BagList = (props) => {
	const products = props.products;
	const [count, setCount] = useState(1);
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
					<div className="wrap-checkbox-item">
						<div className="check-box">
							<input
								type="checkbox"
								className="checkBox"
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
							<button
								className="material-icons remove-icon"
								onClick={(e) => reduceItem(e)}
							>
								remove
							</button>
						</div>
						<h1>{count}</h1>
						<div className="button-remove">
							<div
								className="material-icons add-icon"
								onClick={(e) => addItem(e)}
							>
								add
							</div>
						</div>
					</div>
					<div className="price">
						<h1>{item.harga}</h1>
					</div>
				</div>
			))}
		</div>
	);
};

export default BagList;
