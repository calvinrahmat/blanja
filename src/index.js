import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import CarouselTrending from './components/carousels/trending/CarouselTrending';
import NavbarInit from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselCategory from './components/carousels/category/CarouselCategory.jsx';
import Cards from './components/cards/Cards';

ReactDOM.render(
	<React.StrictMode>
		<NavbarInit />
		{/* <CarouselTrending /> */}
		{/* <CarouselCategory /> */}
		<Cards />
	</React.StrictMode>,

	document.getElementById('root')
);
