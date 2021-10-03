import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ListInventory.scoped.scss';
import { queryClient } from '../..';

const ListInventory = ({ id, nama, harga, stock }) => {
	const urlDelete = `${process.env.REACT_APP_API}/seller/delete`;
	const onDelete = () => {
		axios.delete(urlDelete, { params: { id: id } }).then((res) => {
			console.log(res.data);
			queryClient.invalidateQueries('inventory');
		});
	};
	return (
		<div className="list">
			<Row key={id} className="title">
				<Col sm={4}>{nama}</Col>
				<Col sm={2}>{harga}</Col>
				<Col sm={2}>{stock}</Col>
				<Col sm={2}>
					<Link
						to={`/seller/edit-product/${id}`}
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
		</div>
	);
};

export default ListInventory;
