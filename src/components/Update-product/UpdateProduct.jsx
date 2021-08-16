import axios from 'axios';
import './UpdateProduct.scoped.scss';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useParams } from 'react-router';

const schema = yup.object().shape({
	nama: yup.string().required('nama produk harus diisi'),
	harga: yup.number().positive().integer().required('harga produk harus diisi'),
	stock: yup.number().positive().integer().required('stock produk harus diisi'),
	product_desc: yup.string(),
});

const UpdateProduct = () => {
	let { id } = useParams();
	const url = `${process.env.REACT_APP_API}/seller/updateProduct`;
	const getProductUrl = `${process.env.REACT_APP_API}/products/${id}`;
	const [products, setProduct] = useState([]);

	const onSubmitForm = async (data) => {
		try {
			let formData = new FormData();
			formData.append('img', data.img[0]);
			formData.append('nama', data.nama);
			formData.append('harga', data.harga);
			formData.append('stock', data.stock);
			formData.append('product_desc', data.product_desc);
			formData.append('id', data.id);
			const headers = {
				'Content-type': 'multipart/form-data',
			};
			axios.put(url, formData, headers).then((res) => {
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
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		axios.get(getProductUrl).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});

			setProduct(value[0]);
			reset(res.data);
		});
	}, [getProductUrl, reset]);
	return (
		<>
			<div className="wrapper">
				<div className=" right-container">
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
										defaultValue={products.nama}
										{...register('nama')}
									/>
									<input
										className="form-control id"
										type="number"
										defaultValue={products.id}
										{...register('id')}
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
										defaultValue={products.harga}
										{...register('harga')}
									/>
									<p>{errors.harga?.message}</p>
								</div>
								<div className="form-group">
									<label htmlFor="stock">Stock</label>
									<input
										className="form-control"
										type="number"
										defaultValue={products.stock}
										{...register('stock')}
									/>
								</div>
								<p>{errors.stock?.message}</p>
								<div className="form-group-kondisi">
									<label htmlFor="kondisi">Kondisi</label>
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
						</div>
						<div className="photo-of-goods-wrapper">
							<div className="container title">Photo of goods</div>
							<input type="file" {...register('img')}></input>
						</div>
						<div className="container description">
							<div className="title">Description</div>
							<div className="form-group">
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={10}
									defaultValue={products.product_desc}
									{...register('product_desc')}
								/>
								<p>{errors.product_desc?.message}</p>
							</div>
						</div>
						<div className="btn-group">
							<div className="sell-btn-container">
								<button className="btn-primary sell-btn">Save</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default UpdateProduct;
