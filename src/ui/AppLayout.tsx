import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../features/navigation/Header';

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: flex-start;
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
			<Header />
			<MainContentStyled>
				<Outlet />
			</MainContentStyled>
		</AppContainer>
	);
}

export default AppLayout;
