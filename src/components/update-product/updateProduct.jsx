import axios from 'axios';
import './SellingProduct.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageUploading from 'react-images-uploading';
import { useEffect } from 'react';

const SellingProduct = () => {
	const url = 'http://localhost:7123/seller/addProduct';
	const updateUrl = 'http://localhost:7123/seller/updateProduct';
	const urlTest = 'https://jsonplaceholder.typicode.com/posts';
	const imageDefaultUrl =
		'https://res.cloudinary.com/calvin-cloud/image/upload/v1627948168/Front%20End/no-image_daqikm.svg';
	const [inputs, setInputs] = useState({
		nama: '',
		seller: '',
		kategori: '',
		harga: '',
		stock: '',
		status: '',
		description: '',
	});
	const [images, setImages] = useState([]);
	const maxNumber = 1;
	const [products, setProduct] = useState([]);

	const { nama, seller, kategori, harga, stock, status, img, description } =
		inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const onChangeImage = (imageList, addUpdateIndex) => {
		// data for submit

		console.log(imageList, addUpdateIndex);
		setImages(imageList[0]);
		console.log(imageList);
	};

	//console.log(images[0].data_url);

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = {
				nama,
				harga,
				stock,
				//images,
				description,
			};
			const headers = {
				'Content-type': 'multipart/form-data',
			};

			axios.put(url, body, headers).then((res) => {
				console.log(res.data);
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<>
			<div className="container d-flex wrapper">
				<div className="container left-container">
					<div className="container d-flex profile">
						<div className="profile" />
						<div className="photo-box">
							<img
								src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627339637/Front%20End/profile_yzozml.jpg"
								alt="profile"
							/>
						</div>
						<div className="container profile">
							<h1 className="profile-name">Johanes Mikael</h1>
							<div className="d-grid gap-2 d-flex update-profile">
								<i className="fa fa-pencil" aria-hidden="true" />
								<p className="update-profile">Ubah Profile</p>
							</div>
						</div>
					</div>
				</div>

				<div className="container right-container">
					<form onSubmit={onSubmitForm}>
						<div className="container inventory">
							<div className="container title">Inventory</div>
							<div className="container name-of-goods">
								<div className="form-group">
									<label htmlFor="goods">Name of goods</label>
									<input
										className="form-control"
										type="text"
										name="nama"
										value={nama}
										onChange={(e) => onChange(e)}
									/>
								</div>
							</div>
						</div>
						<div className="container item-details-wrapper">
							<div className="container title">Item details</div>
							<div className="container details">
								<div className="form-group">
									<label htmlFor="unit-price">Unit price</label>
									<input
										className="form-control"
										type="text"
										name="harga"
										value={harga}
										onChange={(e) => onChange(e)}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="stock">Stock</label>
									<input
										className="form-control"
										type="text"
										name="stock"
										value={stock}
										onChange={(e) => onChange(e)}
									/>
								</div>
								<h1>Stock</h1>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="baru-radio"
										defaultValue="baru"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										Baru
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="bekas-radio"
										defaultValue="bekas"
									/>
									<label className="form-check-label" htmlFor="inlineRadio2">
										Bekas
									</label>
								</div>
							</div>
						</div>
						<div className="photo-of-goods-wrapper">
							<div className="container title">Photo of goods</div>
							<ImageUploading
								value={images}
								onChange={onChangeImage}
								maxNumber={maxNumber}
								dataURLKey="data_url"
							>
								{({
									imageList,
									onImageUpload,

									onImageUpdate,
									onImageRemove,
									isDragging,
									dragProps,
								}) => (
									// write your building UI

									<div
										className="container photo-of-goods"
										style={isDragging ? { border: 'solid red' } : null}
										{...dragProps}
									>
										<div className="container goods">
											<div className="photos">
												<div className="image-item">
													<img src={images.data_url} alt="" className="image" />
													<div className="image-item__btn-wrapper">
														<button onClick={() => onImageUpdate()}>
															Update
														</button>
														<button onClick={() => onImageRemove()}>
															Remove
														</button>
													</div>
												</div>
											</div>
										</div>
										<div className="button-container">
											<input
												type="file"
												id="files"
												class="hidden"
												name="image-upload"
												onChange={(e) => onChangeImage(e)}
											/>
											<label for="files">
												<div
													className="btn btn-primary upload-btn"
													onClick={onImageUpload}
												>
													Upload
												</div>
											</label>
										</div>
									</div>
								)}
							</ImageUploading>
						</div>
						<div className="container description">
							<h1>Description</h1>
							<div className="form-group">
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={10}
									defaultValue={''}
									name="description"
									value={description}
									onChange={(e) => onChange(e)}
								/>
							</div>
						</div>
						<div className="sell-btn-container">
							<button className="btn-primary sell-btn">Jual</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default SellingProduct;
