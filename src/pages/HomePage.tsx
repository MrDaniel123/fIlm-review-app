import React from 'react';
import styled from 'styled-components';

import NowPlayingMovie from '../features/carusel/NowPlaying';
import Scroller from '../features/scroller/Scroller';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { usePopularActres } from '../hooks/usePupularActros';
import { useTrendingTvSeries } from '../hooks/useTrendingTvSeries';

const StyledHomePage = styled.main`
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
	gap: 2rem;
	width: 100%;
	height: 100vh;
`;

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

function HomePage() {
	const { data: trendingMoviesData } = useTrendingMovies();
	const { data: populatMoviesData } = usePopularMovies();
	const { data: populatActrosData } = usePopularActres();
	const { data: trendingTvSeriesData } = useTrendingTvSeries();

	let trendingMovies: ScrollerDataType[] | undefined = undefined;
	let populatMovies: ScrollerDataType[] | undefined = undefined;
	let popularActros: ScrollerDataType[] | undefined = undefined;
	let trendingTvSeries: ScrollerDataType[] | undefined = undefined;

	//TODO Add a new function to validatet data to scroller component
	if (trendingMoviesData) {
		trendingMovies = trendingMoviesData?.results.map(movie => {
			return {
				header: movie.title,
				paragraph: movie.release_date,
				imagePath: movie.poster_path,
				id: movie.id,
			};
		});
	}

	if (trendingTvSeriesData) {
		trendingTvSeries = trendingTvSeriesData.results.map(tvSeries => {
			return {
				header: tvSeries.name,
				paragraph: tvSeries.first_air_date,
				imagePath: tvSeries.poster_path,
				id: tvSeries.id,
			};
		});
	}

	if (populatMoviesData) {
		populatMovies = populatMoviesData?.results.map(movie => {
			return {
				header: movie.title,
				paragraph: movie.release_date,
				imagePath: movie.poster_path,
				id: movie.id,
			};
		});
	}

	if (populatActrosData) {
		popularActros = populatActrosData.results.map(actor => {
			return {
				header: actor.name,
				paragraph: '',
				imagePath: actor.profile_path,
				id: actor.id,
			};
		});
	}

	return (
		<StyledHomePage>
			<NowPlayingMovie />
			{trendingMovies && <Scroller data={trendingMovies} name={'Trending Movies'} />}
			{trendingTvSeries && (
				<Scroller data={trendingTvSeries} name={'Trending Tv-Series'} linkTo={'tv-series'} />
			)}
			{popularActros && <Scroller data={popularActros} name={'Popular Actros'} linkTo={'person'} />}
			{populatMovies && <Scroller data={populatMovies} name={'Popular Movies'} />}
		</StyledHomePage>
	);
}

export default HomePage;
