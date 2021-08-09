import CarouselTrending from '../../components/Home/carousels/trending/CarouselTrending';
import CarouselCategory from '../../components/Home/carousels/category/CarouselCategory';
import PopularItemCards from '../../components/Home/cards/popular-item/PopularItemCards';
import NewItemCards from '../../components/Home/cards/new-item/NewItemCards';
import NavbarInit from '../../components/navbar/Navbar';
import NavbarAfterLogin from '../../components/navbar/NavbarAfterLogin';
import './Home.scoped.scss';
import { Container } from 'react-bootstrap';

const Home = () => {
	return (
		<div>
			<NavbarAfterLogin />
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
