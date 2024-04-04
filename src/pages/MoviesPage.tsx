import React from 'react';
import Selector from '../ui/Selector';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledMoviesPage = styled.div`
	max-width: 1440px;
	padding: 120px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

function MoviesPage() {
	const { moviesCategory } = useParams();

	return (
		<StyledMoviesPage>
			<Selector
				categories={['popular', 'nowPlaying', 'topRated', 'upcoming']}
				name={'movies'}
				acturalPath={moviesCategory!}
			/>
		</StyledMoviesPage>
	);
}

export default MoviesPage;
