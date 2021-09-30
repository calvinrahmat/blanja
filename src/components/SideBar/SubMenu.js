import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const Sidebar = styled(Link)`
	display: flex;
	color: #9b9b9b;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 18px;
	padding-left: 70px;

	&:hover {
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #9b9b9b;
	font-size: 18px;

	&:hover {
		background: #2222;

		cursor: pointer;
	}
`;

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);
	const { role } = useSelector((state) => state.login);

	const showSubnav = () => setSubnav(!subnav);
	const { pathname } = useLocation();

	return (
		<>
			<Sidebar to={pathname} onClick={showSubnav}>
				<div>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</Sidebar>

			{role === 'seller' ? (
				subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink to={item.path} key={index}>
							{item.icon}
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})
			) : (
				<span />
			)}
		</>
	);
};

export default SubMenu;
