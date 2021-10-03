import NumberFormat from 'react-number-format';
import { motion } from 'framer-motion';
import './SummaryBottom.scoped.scss';

const SummaryBottom = ({ totalPrice }) => {
	return (
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
	);
};

export default SummaryBottom;
