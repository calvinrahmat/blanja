import 'bootstrap/dist/css/bootstrap.css';
import './carousel.scoped.scss';
import { Link } from 'react-router-dom';

const CarouselTrending = () => {
	return (
		<>
			{/* carousel trending */}
			<div className="container-carousel-trending">
				<div
					id="carouselTrending"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators">
						<div className="flex-indicators">
							<button
								id="buttonIndicator"
								type="button"
								data-bs-target="#carouselTrending"
								data-bs-slide-to={0}
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							/>
							<button
								id="buttonIndicator"
								type="button"
								data-bs-target="#carouselTrending"
								data-bs-slide-to={1}
								aria-label="Slide 2"
							/>
						</div>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="flexbox-container">
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627428406/Front%20End/16272681944df002a92e7bc072790025f951f3ad5e_yfkua3.webp"
										alt=""
									/>
								</figure>
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627400645/Front%20End/16272720384ac3f38c08f445eed671f51176599cae_curknu.webp"
										alt=""
									/>
								</figure>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627428413/Front%20End/1626939862394fb323cf8c417afa63460190bc7e4d_ghtbky.jpg"
										alt=""
									/>
								</figure>
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627400645/Front%20End/162727133199ad9043013a3c37b4d93ed28c688fa7_oielsb.webp"
										alt=""
									/>
								</figure>
							</div>
						</div>
					</div>
					<button
						id="buttonNextMobile"
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselTrending"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						id="buttonPrev"
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselTrending"
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
			{/* carosel trending mobile version */}
			<div className="container-carousel-trending-mobile">
				<div
					id="carouselTrendingMobile"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators">
						<div className="flex-indicators">
							<button
								id="buttonIndicator"
								type="button"
								data-bs-target="#carouselTrendingMobile"
								data-bs-slide-to={0}
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							/>
							<button
								id="buttonIndicator"
								type="button"
								data-bs-target="#carouselTrendingMobile"
								data-bs-slide-to={1}
								aria-label="Slide 2"
							/>
							<button
								id="buttonIndicator"
								type="button"
								data-bs-target="#carouselTrendingMobile"
								data-bs-slide-to={2}
								aria-label="Slide 3"
							/>
							<button
								id="buttonIndicator"
								type="button"
								data-bs-target="#carouselTrendingMobile"
								data-bs-slide-to={3}
								aria-label="Slide 4"
							/>
						</div>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="flexbox-container">
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627400645/Front%20End/16273735026ee69087d28bc1cb110d87d5f9d163bb_es8nb0.webp"
										alt=""
									/>
								</figure>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627400645/Front%20End/16272720384ac3f38c08f445eed671f51176599cae_curknu.webp"
										alt=""
									/>
								</figure>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627400645/Front%20End/1625554467e9b382bc3959f89e8641db3db4dcca76_olrbo4.webp"
										alt=""
									/>
								</figure>
							</div>
						</div>
						<div className="carousel-item">
							<div className="flexbox-container">
								<figure className="box crop-to-fit">
									<img
										className="d-block"
										w-100
										src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627400645/Front%20End/162727133199ad9043013a3c37b4d93ed28c688fa7_oielsb.webp"
										alt=""
									/>
								</figure>
							</div>
						</div>
					</div>
					<button
						id="buttonNextMobile"
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselTrendingMobile"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						id="buttonPrevMobile"
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselTrendingMobile"
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

export default CarouselTrending;
