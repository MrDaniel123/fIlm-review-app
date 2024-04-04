import React from 'react';
import Selector from '../ui/Selector';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';

const StyledMoviesPage = styled.div`
	width: 100%;
	padding: 120px 0;
	display: flex;
	gap: 1.6rem;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

function MoviesPage() {
	const location = useLocation();

	return (
		<StyledMoviesPage>
			<Selector
				categories={['popular', 'nowPlaying', 'topRated', 'upcoming']}
				name={'movies'}
				acturalPath={location.pathname.slice(8, location.pathname.length)}
			/>

			<Outlet />
		</StyledMoviesPage>
	);
}

export default MoviesPage;
