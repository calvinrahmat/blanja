import React from 'react';

const Summary = () => {
	return (
		<div>
			<div class="shopping-summary">
				<h1>Shoppping summary</h1>
				<div class="total-price">
					<div class="total-price-text">
						<p>Total price</p>
					</div>
					<div class="price">
						<h1>$40.0</h1>
					</div>
				</div>
				<button class="btn btn-primary justify-content-center buy-button">
					Buy
				</button>
			</div>

			<div class="shopping-summary-mobile">
				<div class="shopping-summary">
					<h1>Shoppping summary</h1>
					<div class="total-price">
						<div class="total-price-text">
							<p>Total price</p>
						</div>
						<div class="price">
							<h1>$40.0</h1>
						</div>
					</div>
					<div class="button">
						<button class="btn btn-primary buy-button">Buy</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Summary;
