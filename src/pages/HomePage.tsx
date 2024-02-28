import React from 'react';
import styled from 'styled-components';

import NowPlaying from '../features/carusel/NowPlaying';
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
	const { data: trendingMoviesData, isError, isLoading } = useTrendingMovies();
	const { data: popularMoviesData } = usePopularMovies();

	return (
		<StyledHomePage>
			<NowPlaying />
			{trendingMoviesData && <Scroller data={trendingMoviesData} name={'Trending'} />}
			{popularMoviesData && <Scroller data={popularMoviesData} name={'Popular Movies'} />}
		</StyledHomePage>
	);
}

export default HomePage;
