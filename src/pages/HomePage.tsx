import React from 'react';
import styled from 'styled-components';

import NowPlaying from '../features/nowPlayingCarusel/NowPlaying';
import ContentScroller from '../features/contentScroller/ContentScroller';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';

const StyledHomePage = styled.main`
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
	gap: 20px;
	width: 100%;
	height: 100vh;
`;

function HomePage() {
	const { data: trendingMoviesData, isError, isLoading } = useTrendingMovies();
	const { data: popularMoviesData } = usePopularMovies();

	return (
		<StyledHomePage>
			<NowPlaying />
			{trendingMoviesData && <ContentScroller data={trendingMoviesData} name={'Trending'} />}
			{popularMoviesData && <ContentScroller data={popularMoviesData} name={'Popular Movies'} />}
		</StyledHomePage>
	);
}

export default HomePage;
