import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchSuccess } from '../searchSlice';
import { useHistory } from 'react-router';
import { Container } from 'react-bootstrap';
import './SearchBar.scoped.scss';

const SearchBar = () => {
	const { register, handleSubmit } = useForm();
	const history = useHistory();
	const dispatch = useDispatch();
	const onSubmit = (data) => {
		dispatch(searchSuccess(data));
		const query = new URLSearchParams(data);
		history.push(`/search?${query}`);
	};
	return (
		<div>
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
		</div>
	);
};

export default SearchBar;
