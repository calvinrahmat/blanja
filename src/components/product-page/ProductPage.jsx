import { Container } from 'react-bootstrap';
import './ProductPage.scss';
const ProductPage = () => {
	return (
		<Container className="wrapper">
			<Container className="producutContainer">
				<Container className="leftContainer">left</Container>
				<Container className="rightContainer">right</Container>
			</Container>
		</Container>
	);
};

export default ProductPage;
