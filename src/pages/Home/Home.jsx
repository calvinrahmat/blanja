import CarouselTrending from '../../components/Home/carousels/trending/CarouselTrending';
import CarouselCategory from '../../components/Home/carousels/category/CarouselCategory';
import PopularItemCards from '../../components/Home/cards/popular-item/PopularItemCards';
import NewItemCards from '../../components/Home/cards/new-item/NewItemCards';
import './Home.scoped.scss';
import NavbarHeader from '../../components/Navbar/NavbarHeader';

const Home = () => {
	return (
		<div>
			<NavbarHeader />
			<div className="wrapper">
				<CarouselTrending className="carousel-trending" />
				<CarouselCategory className="carousel-category" />
				<NewItemCards />
				<PopularItemCards />
			</div>
		</div>
	);
};

export default Home;
