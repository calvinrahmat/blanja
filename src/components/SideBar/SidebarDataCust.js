import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarDataCust = [
	{
		title: 'My account',
		path: '/profile',
		icon: <FaIcons.FaUser />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: 'Shipping address',
		path: '/profile',
		icon: <MdIcons.MdLocationOn />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: 'My order',
		path: '/profile',
		icon: <FaIcons.FaClipboardList />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
];
