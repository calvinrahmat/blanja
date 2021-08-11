import axios from 'axios';
import './SellingProduct.scoped.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	nama: yup.string().required('nama produk harus diisi'),
	harga: yup.number().positive().integer().required('harga produk harus diisi'),
	stock: yup.number().positive().integer().required('stock produk harus diisi'),
	product_desc: yup.string(),
});

const SellingProduct = () => {
	const url = `${process.env.REACT_APP_API}/seller/addProduct`;

	const onSubmitForm = async (data) => {
		try {
			let formData = new FormData();
			formData.append('img', data.img[0]);
			formData.append('nama', data.nama);
			formData.append('harga', data.harga);
			formData.append('stock', data.stock);
			formData.append('product_desc', data.product_desc);

			const headers = {
				'Content-type': 'multipart/form-data',
			};
			axios.post(url, formData, headers).then((res) => {
				console.log(res.data);
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

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
					<h1>Edit Product</h1>
					<form onSubmit={handleSubmit(onSubmitForm)}>
						<div className="container inventory">
							<div className="container title">Inventory</div>
							<div className="container name-of-goods">
								<div className="form-group">
									<label htmlFor="goods">Name of goods</label>
									<input
										className="form-control"
										type="text"
										{...register('nama')}
									/>
									<p>{errors.nama?.message}</p>
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
										type="number"
										{...register('harga')}
									/>
									<p>{errors.harga?.message}</p>
								</div>
								<div className="form-group">
									<label htmlFor="stock">Stock</label>
									<input
										className="form-control"
										type="number"
										{...register('stock')}
									/>
								</div>
								<p>{errors.stock?.message}</p>
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
							<input type="file" {...register('img')}></input>
						</div>
						<div className="container description">
							<h1>Description</h1>
							<div className="form-group">
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={10}
									{...register('product_desc')}
								/>
								<p>{errors.product_desc?.message}</p>
							</div>
						</div>
						<div className="sell-btn-container">
							<button className="btn-primary sell-btn">Save</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default SellingProduct;
