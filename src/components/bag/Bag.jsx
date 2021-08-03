import './bag.scss';
import { Link } from 'react-router-dom';

const Bag = () => {
	return (
		<div className="bag-container">
			<div className="container left-container">
				<div className="h1">My bag</div>
				<div className="select-container">
					<div className="wrap-checkbox-desc">
						<div className="check-box">
							<div className="material-icons check-icon">done</div>
						</div>
						<div className="select-items">
							<p>
								Select all items
								<span style={{ color: '#9b9b9b' }}>(2 items selected)</span>
							</p>
						</div>
					</div>
					<div className="delete-box">
						<a href="#">
							<p>Delete</p>
						</a>
					</div>
				</div>
				<div className="items-container">
					<div className="item1-container">
						<div className="wrap-checkbox-item">
							<div className="check-box">
								<div className="material-icons check-icon">done</div>
							</div>
							<div className="photo-box">
								<img
									src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627351607/Front%20End/Mask_Group_dyzplu.svg"
									alt="item-1"
								/>
							</div>
							<div className="item-desc">
								<h1>Men's formal suit - Black</h1>
								<p>Zalora-Cloth</p>
							</div>
						</div>
						<div className="button-container">
							<div className="button-remove">
								<div className="material-icons remove-icon">remove</div>
							</div>
							<h1>1</h1>
							<div className="button-remove">
								<div className="material-icons add-icon">add</div>
							</div>
						</div>
						<div className="price">
							<h1>$20.0</h1>
						</div>
					</div>
					<div className="item2-container">
						<div className="wrap-checkbox-item">
							<div className="check-box">
								<div className="material-icons check-icon">done</div>
							</div>
							<div className="photo-box">
								<img
									src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627351607/Front%20End/Mask_Group_dyzplu.svg"
									alt="item-1"
								/>
							</div>
							<div className="item-desc">
								<h1>Men's formal suit - Black</h1>
								<p>Zalora-Cloth</p>
							</div>
						</div>
						<div className="button-container">
							<div className="button-remove">
								<div className="material-icons remove-icon">remove</div>
							</div>
							<h1>1</h1>
							<div className="button-remove">
								<div className="material-icons add-icon">add</div>
							</div>
						</div>
						<div className="price">
							<h1>$20.0</h1>
						</div>
					</div>
				</div>
				<div className="shopping-summary-mobile">
					<div className="shopping-summary">
						<h1>Shoppping summary</h1>
						<div className="total-price">
							<div className="total-price-text">
								<p>Total price</p>
							</div>
							<div className="price">
								<h1>$40.0</h1>
							</div>
						</div>
						<div className="button">
							<button className="btn btn-primary buy-button">Buy</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container right-container">
				<div className="shopping-summary">
					<h1>Shoppping summary</h1>
					<div className="total-price">
						<div className="total-price-text">
							<p>Total price</p>
						</div>
						<div className="price">
							<h1>$40.0</h1>
						</div>
					</div>
					<button className="btn btn-primary justify-content-center buy-button">
						Buy
					</button>
				</div>
			</div>
		</div>
	);
};

export default Bag;
