import './Product.scoped.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QueryString from 'qs';

const Product = () => {
	let { id } = useParams();
	const url = `${process.env.REACT_APP_API}/products/${id}`;
	const urlAddToBag = `${process.env.REACT_APP_API}/products/addToBag/`;
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
			console.log(value);
		});
	}, [url, id]);

	const addToBag = async (e) => {
		e.preventDefault();
		try {
			const body = QueryString.stringify({
				qty: count,
				id: products.id,
			});
			const headers = {
				'Content-Type': 'application/x-www-form-urlencoded',
			};
			console.log(body);

			axios.post(urlAddToBag, body, headers).then((res) => {
				console.log(`add to bag: ${res.data}`);
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<>
			<div className="container-lg wrapper-product">
				<div className="container-lg product-container">
					<div className="container left-	-product">
						<div className="box-product">
							<figure className="box crop-to-fit-product">
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
							<p className="price-product">Rp{products.harga}</p>
						</div>
						<h2 className="jumlah">Jumlah</h2>
						<div id="countBtnProduct" className="container count-btn-product">
							<button
								id="btnReduce"
								className="btn btn-primary btn-circle btn-reduce"
								onClick={reduceCount}
							>
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
						<div className="buttons-product">
							<button className="btn btn-primary chat-btn">Chat</button>
							<button
								className="btn btn-primary to-bag-btn"
								onClick={(e) => addToBag(e)}
							>
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
					<p>{products.description}</p>
				</div>
			</div>
		</>
	);
};

export default Product;
