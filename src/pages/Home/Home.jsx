import CarouselTrending from '../../components/Home/carousels/trending/CarouselTrending';
import CarouselCategory from '../../components/Home/carousels/category/CarouselCategory';
import PopularItemCards from '../../components/Home/cards/popular-item/PopularItemCards';
import NewItemCards from '../../components/Home/cards/new-item/NewItemCards';
import './Home.scoped.scss';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NavbarHeader from '../../components/Navbar/NavbarHeader';

const Home = () => {
	return (
		<div>
			<NavbarHeader />
			<Container className="wrapper">
				<CarouselTrending />
				<CarouselCategory />
				<NewItemCards />
				<PopularItemCards />
			</Container>
		</div>
	);
};

export default Home;
