import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../features/navigation/Navigation';

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	height: 100vh;
`;

const MainContentStyled = styled.div`
	width: 100%;
`;

function AppLayout() {
	return (
		<AppContainer>
			<Navigation />
			<MainContentStyled>
				<Outlet />
			</MainContentStyled>
		</AppContainer>
	);
}

export default AppLayout;
