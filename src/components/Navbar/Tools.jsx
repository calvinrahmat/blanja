import { Container, Dropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import './style/Tools.scoped.scss';
import { useDispatch } from 'react-redux';

import {
	nameAsc,
	nameDesc,
	priceHigh,
	priceLow,
	sortNew,
	sortOld,
} from './sortSlice';
import SearchBar from './SearchBar/SearchBar';

const Tools = () => {
	const dispatch = useDispatch();

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
				<SearchBar />
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
