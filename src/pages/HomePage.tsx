import styled from 'styled-components';

import { useTrendingMovies } from '../hooks/trending/useTrendingMovies';
import { useTrendingTvSeries } from '../hooks/trending/useTrendingTvSeries';
import { usePopularMovies } from '../hooks/popular/usePopularMovies';
import { usePopularActros } from '../hooks/popular/usePopularActros';

import { preparingTrendingMovies } from '../utils/preparingDataToScroller/trendingMovies';
import { preparingTrendingTvSeries } from '../utils/preparingDataToScroller/trendingTvSeries';
import { preparingPopularMovies } from '../utils/preparingDataToScroller/popularMovies';
import { preparingPopularActros } from '../utils/preparingDataToScroller/popularActros';

import NowPlayingMovie from '../features/carusel/NowPlaying';
//TODO nowplaying Movie Has olders wersion data flow Fix it

import Scroller from '../features/scroller/Scroller';

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
	const { data: trendingMovies } = useTrendingMovies();
	const { data: trendingTvSeries } = useTrendingTvSeries();

	const { data: populatMovies } = usePopularMovies();
	const { data: populatActros } = usePopularActros();

	return (
		<StyledHomePage>
			<NowPlayingMovie />
			{trendingMovies && (
				<Scroller data={preparingTrendingMovies(trendingMovies)} name={'Trending Movies'} />
			)}
			{trendingTvSeries && (
				<Scroller
					data={preparingTrendingTvSeries(trendingTvSeries)}
					name={'Trending Tv-Series'}
					linkTo={'tv-series'}
				/>
			)}
			{populatActros && (
				<Scroller
					data={preparingPopularActros(populatActros)}
					name={'Popular Actros'}
					linkTo={'person'}
				/>
			)}
			{populatMovies && (
				<Scroller data={preparingPopularMovies(populatMovies)} name={'Popular Movies'} />
			)}
		</StyledHomePage>
	);
}

export default HomePage;
