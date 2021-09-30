import { Container, Dropdown } from 'react-bootstrap';
import { FaFilter, FaSearch } from 'react-icons/fa';
import './style/Tools.scoped.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchSuccess } from './searchSlice';
import { useHistory } from 'react-router';
import { useState } from 'react';
import {
	nameAsc,
	nameDesc,
	priceHigh,
	priceLow,
	sortNew,
	sortOld,
} from './sortSlice';

const Tools = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		dispatch(searchSuccess(data));
		const query = new URLSearchParams(data);
		history.push(`/search?${query}`);
	};

	const priceHighToLow = () => {
		dispatch(priceHigh(true));
	};
	const priceLowToHigh = () => {
		dispatch(priceLow(true));
	};
	const nameAscending = () => {
		dispatch(nameAsc(true));
	};
	const nameDescending = () => {
		dispatch(nameDesc(true));
	};
	const sortProductNew = () => {
		dispatch(sortNew(true));
	};
	const sortProductOld = () => {
		dispatch(sortOld(true));
	};

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
							{...register('name')}
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
							<Dropdown.Item onClick={priceLowToHigh}>
								Harga: rendah ke tinggi
							</Dropdown.Item>
							<Dropdown.Item onClick={priceHighToLow}>
								Harga: tinggi ke rendah
							</Dropdown.Item>
							<Dropdown.Item onClick={nameAscending}>Nama: A-Z</Dropdown.Item>
							<Dropdown.Item onClick={nameDescending}>Nama: Z-A</Dropdown.Item>
							<Dropdown.Item onClick={sortProductNew}>Terbaru</Dropdown.Item>
							<Dropdown.Item onClick={sortProductOld}>Terlama</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Container>
		</div>
	);
};

export default Tools;
