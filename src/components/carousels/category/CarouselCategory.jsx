import './carousel.scoped.scss';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const CarouselCategory = () => {
	return (
		<>
			<Container fluid>
				<div className="container-carousel-category">
					<h1>Category</h1>
					<p>What are you looking for</p>
					<div id="carouselCategory" className="carousel slide">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="flexbox-container">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/T-Shirt_kbhxdg.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/Short_dyep9b.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134532/Front%20End/Kategori/Pants_vfy0xa.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134529/Front%20End/Kategori/Shoes_ziteoh.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229207/Front%20End/Kategori/Group_1236_vaxxb6.svg"
										alt="kategori"
									/>
								</div>
							</div>
							<div className="carousel-item">
								<div className="flexbox-container">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229205/Front%20End/Kategori/Group_1237_la2pkm.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1235_wpjjc6.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229209/Front%20End/Kategori/Group_1243_dhyf6s.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229212/Front%20End/Kategori/Group_1245_lkzbsg.svg"
										alt="kategori"
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1240_wtoabp.svg"
										alt="kategori"
									/>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselCategory"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselCategory"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</Container>
			<Container fluid>
				<div className="container-carousel-category-mobile">
					<h1>Category</h1>
					<p>What are you looking for</p>
					<div id="carouselCategoryMobile" className="carousel slide">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="flexbox-container">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/T-Shirt_kbhxdg.svg"
										alt=""
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/Short_dyep9b.svg"
										alt=""
									/>
								</div>
							</div>
							<div className="carousel-item">
								<div className="flexbox-container">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134532/Front%20End/Kategori/Pants_vfy0xa.svg"
										alt=""
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134529/Front%20End/Kategori/Shoes_ziteoh.svg"
										alt=""
									/>
								</div>
							</div>
							<div className="carousel-item">
								<div className="flexbox-container">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229207/Front%20End/Kategori/Group_1236_vaxxb6.svg"
										alt=""
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229205/Front%20End/Kategori/Group_1237_la2pkm.svg"
										alt=""
									/>
								</div>
							</div>
							<div className="carousel-item">
								<div className="flexbox-container">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1235_wpjjc6.svg"
										alt=""
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229209/Front%20End/Kategori/Group_1243_dhyf6s.svg"
										alt=""
									/>
								</div>
							</div>
							<div className="carousel-item">
								<div className="flexbox-container">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229212/Front%20End/Kategori/Group_1245_lkzbsg.svg"
										alt=""
									/>

									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1240_wtoabp.svg"
										alt=""
									/>
								</div>
							</div>
						</div>
						<button
							id="buttonPrevMobileCategory"
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselCategoryMobile"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							id="buttonNextMobileCategory"
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselCategoryMobile"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</Container>
		</>
	);
};

export default CarouselCategory;
