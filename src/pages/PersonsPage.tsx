import React from 'react';
import Selector from '../ui/Selector';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';

const StyledPersonsPage = styled.div`
	width: 100%;
	padding: 120px 0;
	display: flex;
	gap: 1.6rem;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

function PersonsPage() {
	return (
		<StyledPersonsPage>
			<Selector
				categories={['popular']}
				name={'Persons'}
				disabled={true}
				actualCategory={'popular'}
			/>
			<Outlet />
		</StyledPersonsPage>
	);
}

export default PersonsPage;
