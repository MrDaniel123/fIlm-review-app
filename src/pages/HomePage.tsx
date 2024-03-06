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

type TrendingMoviesType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

function HomePage() {
	const { data: trendingMoviesData, isError, isLoading } = useTrendingMovies();
	const { data: populatMoviesData } = usePopularMovies();

	let trendingMovies: TrendingMoviesType[] | undefined = undefined;
	let populatMovies: TrendingMoviesType[] | undefined = undefined;

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

	return (
		<StyledHomePage>
			<NowPlayingMovie />
			{trendingMovies && <Scroller data={trendingMovies} name={'Trending'} />}
			{populatMovies && <Scroller data={populatMovies} name={'Popular Movies'} />}
		</StyledHomePage>
	);
}

export default HomePage;
