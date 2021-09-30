import axios from 'axios';

export const getUser = async (email) => {
	const response = await axios.get(
		`${process.env.REACT_APP_API}/user/${email}`
	);
	const { data } = await response.data;
	if (!response.ok) {
		throw new Error('error get user');
	}
	return data;
};

export const getTotalQty = async (email) => {
	const response = await axios.get(
		`${process.env.REACT_APP_API}/bag/totalqty/${email}`
	);
	const { data } = await response.data;
	if (!response.ok) {
		throw new Error('error get qty');
	}
	return data;
};
