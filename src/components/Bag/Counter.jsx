import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, hideIncrement }) => {
	return (
		<div>
			<div>
				<span>{value}</span>
				{value > 0 && (
					<button
						onClick={() => {
							onDecrement();
						}}
					>
						-
					</button>
				)}
				{
					<button
						onClick={() => {
							onIncrement();
						}}
					>
						+
					</button>
				}
			</div>
		</div>
	);
};

export default Counter;
