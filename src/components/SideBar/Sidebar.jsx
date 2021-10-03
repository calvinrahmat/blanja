import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import { SidebarDataCust } from './SidebarDataCust';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useSelector } from 'react-redux';

const SidebarNav = styled.nav`
	background: #ffffff;
	width: 15%;
	min-width: 220px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 76px;
	z-index: 10;
	display: flex;
	padding-top: 40px;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {
	const { role } = useSelector((state) => state.login);

	return (
		<>
			<IconContext.Provider value={{ color: '#9b9b9b' }}>
				<SidebarNav>
					{role === 'seller' ? (
						<SidebarWrap>
							{SidebarData.map((item, index) => {
								return <SubMenu item={item} key={index} />;
							})}
						</SidebarWrap>
					) : (
						<SidebarWrap>
							{SidebarDataCust.map((item, index) => {
								return <SubMenu item={item} key={index} />;
							})}
						</SidebarWrap>
					)}
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
