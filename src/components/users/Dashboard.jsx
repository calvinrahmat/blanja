import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Dashboard = ({ setAuth }) => {
	const [name, setName] = useState('');

	async function getName() {
		try {
			axios.get();
		} catch (err) {
			console.error(err.message);
		}
	}
	useEffect(() => {
		getName();
	});

	return (
		<>
			<h1>Dashboard</h1>
			<button onClick={() => setAuth(false)}>logout</button>
		</>
	);
};

export default Dashboard;
