import queryString from 'query-string';
import { useLocation } from 'react-router';
import SearchItem from '../../components/Home/cards/search-item/SearchItem';

import NavbarHeader from '../../components/Navbar/NavbarHeader';

const SearchPage = () => {
	const { search } = useLocation();
	const { name } = queryString.parse(search);

	return (
		<div>
			<NavbarHeader />
			<SearchItem name={name} />
		</div>
	);
};

export default SearchPage;
