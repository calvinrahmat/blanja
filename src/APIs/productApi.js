import axios from 'axios';

export const getProducts = async (email) => {
	const response = await axios.get(
		`${process.env.REACT_APP_API}/seller/products/${email}`
	);
	const { data } = await response.data;
	if (response.ok) {
		throw new Error('error');
	}
	return data;
};

export const removeBagItem = async (id) => {
	await axios.delete(`${process.env.REACT_APP_API}/seller/delete`, {
		params: { id: id },
	});

	return true;
};
