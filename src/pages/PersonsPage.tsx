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
	const location = useLocation();

	return (
		<StyledPersonsPage>
			<Selector
				categories={['popular']}
				name={'Persons'}
				acturalPath={location.pathname.slice(9, location.pathname.length)}
				disabled={true}
			/>
			<Outlet />
		</StyledPersonsPage>
	);
}

export default PersonsPage;
