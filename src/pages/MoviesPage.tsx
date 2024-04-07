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
	let actualCategory = 'popular';
	if (location.pathname.includes('nowPlaying')) {
		actualCategory = 'nowPlaying';
	} else if (location.pathname.includes('upcoming')) {
		actualCategory = 'upcoming';
	} else if (location.pathname.includes('topRated')) {
		actualCategory = 'topRated';
	}

	return (
		<StyledMoviesPage>
			<Selector
				categories={['popular', 'nowPlaying', 'topRated', 'upcoming']}
				name={'movies'}
				actualCategory={actualCategory}
			/>

			<Outlet />
		</StyledMoviesPage>
	);
}

export default MoviesPage;
