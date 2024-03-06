import React from 'react';
import styled from 'styled-components';

import NowPlayingMovie from '../features/carusel/NowPlaying';
import Scroller from '../features/scroller/Scroller';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';

const StyledHomePage = styled.main`
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
	gap: 2rem;
	width: 100%;
	height: 100vh;
`;

function HomePage() {
	const { data: trendingMovies, isError, isLoading } = useTrendingMovies();
	const { data: populatMovies } = usePopularMovies();

	return (
		<StyledHomePage>
			<NowPlayingMovie />
			{trendingMovies && <Scroller data={trendingMovies} name={'Trending'} />}
			{populatMovies && <Scroller data={populatMovies} name={'Popular Movies'} />}
		</StyledHomePage>
	);
}

export default HomePage;
