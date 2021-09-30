import React from 'react';
import { useMutation } from 'react-query';
import { removeBagItem } from '../../../APIs/bagApi';
import { queryClient } from '../../..';
import './DeleteItem.scoped.scss';

const DeleteItem = ({ bag_id }) => {
	const { mutateAsync } = useMutation(removeBagItem);

	const remove = async () => {
		await mutateAsync(bag_id);
		queryClient.invalidateQueries('bag');
	};

	return (
		<div>
			<button
				className="material-icons delete-icon"
				onClick={remove}
				id={bag_id}
			>
				delete
			</button>
		</div>
	);
};

export default DeleteItem;
