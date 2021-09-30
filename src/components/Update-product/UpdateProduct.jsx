import axios from 'axios';
import './UpdateProduct.scoped.scss';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation, useParams } from 'react-router';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
	nama: yup.string().required('nama produk harus diisi'),
	harga: yup.number().positive().integer().required('harga produk harus diisi'),
	stock: yup.number().positive().integer().required('stock produk harus diisi'),
	product_desc: yup.string(),
});

const thumbsContainer = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	marginTop: 16,
};

const thumb = {
	display: 'inline-flex',
	borderRadius: 2,
	border: '1px solid #eaeaea',
	marginBottom: 8,
	marginRight: 8,
	width: 200,
	height: 200,
	padding: 4,
	boxSizing: 'border-box',
};

const thumbInner = {
	display: 'flex',
	minWidth: 0,
	overflow: 'hidden',
};

const img = {
	display: 'block',
	width: 'auto',
	height: '100%',
};

const UpdateProduct = () => {
	const { email } = useSelector((state) => state.login);
	const { pathname } = useLocation();
	let { id } = useParams();
	const url = `${process.env.REACT_APP_API}/seller/updateProduct`;
	const addProduct = `${process.env.REACT_APP_API}/seller/addProduct/`;
	const getProductUrl = `${process.env.REACT_APP_API}/products/${id}`;
	const getSellerName = `${process.env.REACT_APP_API}/seller/name/${email}`;
	const [products, setProduct] = useState([]);
	const [name, setName] = useState([]);
	const { role } = useSelector((state) => state.login);

	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	useEffect(() => {
		if (role === 'seller')
			axios.get(getSellerName).then((res) => {
				const { data } = res.data;
				const value = [];
				data.map((val) => {
					return value.push(val);
				});

				setName(value[0]);
			});
	}, [getSellerName, role]);
	console.log(name.name);

	const thumbs = files.map((file) => (
		<div style={thumb} key={file.name}>
			<div style={thumbInner}>
				<img src={file.preview} style={img} alt="product" />
			</div>
		</div>
	));

	const onSubmitForm = async (data) => {
		console.log(files[0]);
		if (pathname === '/seller/add-product') {
			try {
				let formData = new FormData();
				formData.append('img', files[0]);
				formData.append('nama', data.nama);
				formData.append('harga', data.harga);
				formData.append('stock', data.stock);
				formData.append('product_desc', data.product_desc);
				formData.append('email', email);
				formData.append('seller', name.name);

				const headers = {
					'Content-type': 'multipart/form-data',
				};
				axios.post(addProduct, formData, headers).then((res) => {
					console.log(res.data);
				});
			} catch (error) {
				console.error(error.message);
			}
		} else {
			try {
				let formData = new FormData();
				formData.append('img', files[0]);
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

	useEffect(
		() => () => {
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	useEffect(() => {
		if (pathname !== '/seller/add-product')
			axios.get(getProductUrl).then((res) => {
				const { data } = res.data;
				const value = [];
				data.map((val) => {
					return value.push(val);
				});

				setProduct(value[0]);
				reset(res.data);
			});
	}, [getProductUrl, reset, pathname]);
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
										defaultValue={
											pathname === '/seller/add-product' ? null : products.nama
										}
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
										defaultValue={
											pathname === '/seller/add-product' ? null : products.harga
										}
										{...register('harga')}
									/>
									<p>{errors.harga?.message}</p>
								</div>
								<div className="form-group">
									<label htmlFor="stock">Stock</label>
									<input
										className="form-control"
										type="number"
										defaultValue={
											pathname === '/seller/add-product' ? null : products.stock
										}
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
							<div
								{...getRootProps({ className: 'dropzone' })}
								style={{ height: '300px' }}
							>
								<input {...getInputProps()} />
								<p>Drag 'n' drop image here, or click to select image</p>

								<aside style={thumbsContainer}>{thumbs}</aside>
							</div>
						</div>
						<div className="container description">
							<div className="title">Description</div>
							<div className="form-group">
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={10}
									defaultValue={
										pathname === '/seller/add-product'
											? null
											: products.product_desc
									}
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
