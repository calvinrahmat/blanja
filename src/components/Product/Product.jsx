import './Product.scoped.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { queryClient } from '../../index';
import ModalAddToBag from '../Modal/ModalAddToBag';

const Product = () => {
	let { id } = useParams();
	const { email } = useSelector((state) => state.login);
	const url = `${process.env.REACT_APP_API}/products/${id}`;
	const urlAddToBag = `${process.env.REACT_APP_API}/products/addToBag/`;

	const [showInside, setShowInside] = useState(false);
	const handleClose = () => setShowInside(false);
	const handleShow = () => setShowInside(true);

	const [count, setCount] = useState(1);
	const [products, setProduct] = useState([]);

	const addCount = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const reduceCount = () => {
		if (count > 1) setCount((prevCount) => prevCount - 1);
	};

	useEffect(() => {
		axios.get(url, { params: { id: id } }).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});
			setProduct(value[0]);
		});
	}, [url, id]);

	const addToBag = async () => {
		// modalOpen ? close() : open();
		try {
			const body = {
				qty: count,
				id: products.id,
				email: email,
			};
			const headers = {
				'Content-Type': 'application/x-www-form-urlencoded',
			};

			axios.post(urlAddToBag, body, headers).then((res) => {
				queryClient.invalidateQueries('qty');
				handleShow();
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	<style type="text/css">
		{`
    .btn-flat {
      background-color: white;
      color: black;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
	</style>;

	return (
		<div className="container-lg wrapper-product">
			<div className="routing">
				<h1>
					<p>
						<Link to="/" style={{ textDecoration: 'none', color: '#9b9b9b' }}>
							Home
						</Link>
						{'>'} kateg ori {'>'} {products.kategori}
					</p>
				</h1>
			</div>
			<div className="container-lg product-container">
				<div className="container left-container-product">
					<div className="box-product">
						<figure className="box crop-to-fit-product skeleton">
							<img src={products.img} alt="" />
						</figure>
					</div>
				</div>
				<div className="container right-container-product">
					<h1>{products.nama}</h1>
					<h2 className="seller">{products.seller}</h2>
					<span className="fa fa-star checked" />
					<span className="fa fa-star checked" />
					<span className="fa fa-star checked" />
					<span className="fa fa-star checked" />
					<span className="fa fa-star checked" />

					<div className="price-container">
						<h2 className="price">Price</h2>
						<p className="price-product">
							<NumberFormat
								value={products.harga}
								displayType={'text'}
								thousandSeparator={'.'}
								decimalSeparator={','}
								prefix={'Rp'}
							/>
						</p>
					</div>
					<div className="wrapper-button">
						<h2 className="jumlah">Jumlah</h2>
						<div id="countBtnProduct" className="container count-btn-product">
							<button id="btnReduce" className="btn " onClick={reduceCount}>
								<h1>-</h1>
							</button>
							<h1 className="count">{count}</h1>
							<button
								id="btnAdd"
								className="btn btn-primary btn-circle btn-sm btn-add"
								onClick={addCount}
							>
								<h1>+</h1>
							</button>
						</div>
					</div>

					<div className="buttons-product">
						<button className="btn btn-primary chat-btn">Chat</button>
						<button className="btn btn-primary to-bag-btn" onClick={addToBag}>
							Add to bag
						</button>
						<button className="btn btn-primary buy-btn">Buy Now</button>
					</div>
				</div>
			</div>
			<div className="container-fluid d-flex flex-column md description">
				<h1>Informasi Produk</h1>
				<h2>Condition</h2>
				<p>{products.status}</p>
				<h2>Description</h2>
				<p>{products.product_desc}</p>
			</div>
			<Modal
				show={showInside}
				onHide={handleClose}
				centered
				className="modal"
				size="lg"
			>
				<Modal.Header closeButton>
					<Modal.Title>
						<h1>Berhasil Ditambahkan </h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ModalAddToBag image={products.img} name={products.nama} />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Product;
