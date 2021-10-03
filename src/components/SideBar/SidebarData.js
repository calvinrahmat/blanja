import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Store',
		path: '/seller/profile',
		icon: <FaIcons.FaHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Store Profile',
				path: '/profile',
			},
		],
	},
	{
		title: 'Product',
		path: '/seller/inventory',
		icon: <FaIcons.FaBox />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'My Products',
				path: '/seller/inventory',
			},
			{
				title: 'Selling Products',
				path: '/seller/add-product',
			},
		],
	},
	{
		title: 'Order',
		path: '/seller/inventory',
		icon: <FiIcons.FiShoppingCart />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'My Order',
				path: '/seller/inventory',
			},
			{
				title: 'Order Cancel',
				path: '/seller/order-cancel',
			},
		],
	},
];
