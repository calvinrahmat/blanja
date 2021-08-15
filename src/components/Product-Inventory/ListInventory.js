import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ListInventory.scoped.scss';

const ListInventory = (props) => {
	const list = props.list;

	const urlDelete = `${process.env.REACT_APP_API}/seller/delete`;
	const onDelete = (data) => {
		axios.delete(urlDelete, { params: { id: list.id } }).then((res) => {
			const { data } = res.data;
			const value = [];
			data.map((val) => {
				return value.push(val);
			});
		});
	};
	return (
		<div className="list">
			{list.map((item) => (
				// <Link
				// 	to={`/product/${item.id}`}
				// 	style={{ textDecoration: 'none', color: 'black' }}
				// >
				<Row key={item.id} className="title">
					<Col sm={4}>{item.nama}</Col>
					<Col sm={2}>{item.harga}</Col>
					<Col sm={2}>{item.stock}</Col>
					<Col sm={2}>
						<Link
							to={`/seller/edit-product/${item.id}`}
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<button className="btn-danger edit-btn">Edit</button>
						</Link>
					</Col>
					<Col sm={2}>
						<button
							className="btn-danger delete-btn"
							onClick={(data) => onDelete(data)}
						>
							Delete
						</button>
					</Col>
				</Row>
			))}
		</div>
	);
};

export default ListInventory;
