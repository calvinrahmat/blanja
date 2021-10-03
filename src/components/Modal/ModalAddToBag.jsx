import './ModalAddToBag.scoped.scss';
import { useHistory } from 'react-router';

const ModalAddToBag = ({ image, name }) => {
	const history = useHistory();
	const onClick = () => history.push('/bag');
	return (
		<>
			<div className="item-wrapper">
				<div className="item-desc">
					<div className="photo-box-bag">
						<img className="product-img-bag" src={image} alt="item" />
					</div>
					<div className="item-text">{name}</div>
				</div>
				<button onClick={onClick}>Lihat Keranjang</button>
			</div>
		</>
	);
};

export default ModalAddToBag;
