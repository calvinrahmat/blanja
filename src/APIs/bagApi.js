import axios from 'axios';

export const getBag = async (email) => {
	const response = await axios.get(`${process.env.REACT_APP_API}/bag/${email}`);
	const { data } = await response.data;
	if (response.ok) {
		throw new Error('error');
	}
	return data;
};

export const removeBagItem = async (bag_id) => {
	await axios.delete(`${process.env.REACT_APP_API}/bag/del`, {
		params: { id: bag_id },
	});

	return true;
};

export const removeBagAll = async (email) => {
	await axios.delete(`${process.env.REACT_APP_API}/bag/del/all/${email}`);

	return true;
};

export const updateBagItemQty = async ({ bag_id, qty, img }) => {
	const updateQty = {
		bag_id: bag_id,
		qty: qty,
		img: img,
	};
	const response = await axios
		.put(`${process.env.REACT_APP_API}/bag/updateqty`, updateQty)
		.then((res) => {
			return res;
		});
	const { data } = await response.data;
	return data;
};
