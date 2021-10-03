import React from 'react';
import { useMutation } from 'react-query';
import { removeBagAll } from '../../../APIs/bagApi';
import { queryClient } from '../../..';
import './DeleteItem.scoped.scss';

const DeleteAllItem = ({ email }) => {
	const { mutateAsync } = useMutation(removeBagAll);

	const remove = async () => {
		console.log('delete');
		await mutateAsync(email);
		queryClient.invalidateQueries('bag');
	};

	return (
		<div>
			<p className="delete" onClick={remove} style={{cursor:'pointer'}}>
				Delete
			</p>
		</div>
	);
};

export default DeleteAllItem;
