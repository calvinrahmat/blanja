import './carousel.scss';
import { Link } from 'react-router-dom';

const CarouselCategory = () => {
	return (
		<>
			<div className="container-carousel-category">
				<h1>Category</h1>
				<p>What are you looking for</p>
				<div id="carouselCategory" className="carousel slide">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="flexbox-container">
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/T-Shirt_kbhxdg.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/Short_dyep9b.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134532/Front%20End/Kategori/Pants_vfy0xa.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134529/Front%20End/Kategori/Shoes_ziteoh.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229207/Front%20End/Kategori/Group_1236_vaxxb6.svg"
										alt="kategori"
									/>
								</Link>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229205/Front%20End/Kategori/Group_1237_la2pkm.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1235_wpjjc6.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229209/Front%20End/Kategori/Group_1243_dhyf6s.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229212/Front%20End/Kategori/Group_1245_lkzbsg.svg"
										alt="kategori"
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1240_wtoabp.svg"
										alt="kategori"
									/>
								</Link>
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
			<div className="container-carousel-category-mobile">
				<h1>Category</h1>
				<p>What are you looking for</p>
				<div id="carouselCategoryMobile" className="carousel slide">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="flexbox-container">
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/T-Shirt_kbhxdg.svg"
										alt=""
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134527/Front%20End/Kategori/Short_dyep9b.svg"
										alt=""
									/>
								</Link>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134532/Front%20End/Kategori/Pants_vfy0xa.svg"
										alt=""
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627134529/Front%20End/Kategori/Shoes_ziteoh.svg"
										alt=""
									/>
								</Link>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229207/Front%20End/Kategori/Group_1236_vaxxb6.svg"
										alt=""
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229205/Front%20End/Kategori/Group_1237_la2pkm.svg"
										alt=""
									/>
								</Link>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1235_wpjjc6.svg"
										alt=""
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229209/Front%20End/Kategori/Group_1243_dhyf6s.svg"
										alt=""
									/>
								</Link>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229212/Front%20End/Kategori/Group_1245_lkzbsg.svg"
										alt=""
									/>
								</Link>
								<Link href="#">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627229206/Front%20End/Kategori/Group_1240_wtoabp.svg"
										alt=""
									/>
								</Link>
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
		</>
	);
};

export default CarouselCategory;
