import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { FaFilter, FaSearch } from 'react-icons/fa';
import './style/Tools.scoped.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchSuccess } from './searchSlice';
import { useSelector } from 'react-redux';

const Tools = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		dispatch(searchSuccess(data));
	};
	const { search } = useSelector((state) => state.search.search);
	console.log(search);
	return (
		<div>
			<Container className="tools">
				<Container className="search-bar">
					<form
						className="d-flex search-box bg-transparent "
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							type="text"
							placeholder="Search"
							className="search"
							aria-label="Search"
							{...register('search')}
						/>

						<button className="btn" variant="primary">
							<FaSearch className="search-icon" type="submit" />
						</button>
					</form>
				</Container>
				<Container className="filter-box">
					<Dropdown>
						<Dropdown.Toggle variant="none">
							<FaFilter className="filter-icon" />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item>Harga: rendah ke tinggi</Dropdown.Item>
							<Dropdown.Item>Harga: tinggi ke rendah</Dropdown.Item>
							<Dropdown.Item>Nama: A-Z</Dropdown.Item>
							<Dropdown.Item>Nama: Z-A</Dropdown.Item>
							<Dropdown.Item>Terbaru</Dropdown.Item>
							<Dropdown.Item>Terlama</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Container>
		</div>
	);
};

export default Tools;
