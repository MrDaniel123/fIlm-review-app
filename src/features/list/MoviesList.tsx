import React from 'react';
import styled from 'styled-components';

import { useNowPlayingMovieMovies } from '../../hooks/nowPlaying/useNowPlayingMovies';
import { usePopularMovies } from '../../hooks/popular/usePopularMovies';
import { useTopRatedMovies } from '../../hooks/topRated/useTopRatedMovies';

import ListElement from './ListElement';
import { useUpComingMovies } from '../../hooks/upcoming/useUpcomingMovies';

const ListWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1.6rem;
	width: 90%;
	max-width: 1440px;
`;

type ListProps = {
	type: 'popular' | 'nowPlaying' | 'topRated' | 'upcoming';
};

function MoviesList({ type }: ListProps) {
	const { data: nowPlayingMovies } = useNowPlayingMovieMovies();
	const { data: popularMovies } = usePopularMovies();
	const { data: topRatedMovies } = useTopRatedMovies();
	const { data: upcomingMovies } = useUpComingMovies();

	if (type === 'nowPlaying') {
		const renderListElements = nowPlayingMovies?.results.map(movie => (
			<ListElement type={'nowPlaying'} data={movie} key={movie.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}
	if (type === 'popular') {
		const renderListElements = popularMovies?.results.map(movie => (
			<ListElement type={'popular'} data={movie} key={movie.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	if (type === 'topRated') {
		const renderListElements = topRatedMovies?.results.map(movie => (
			<ListElement type={'topRated'} data={movie} key={movie.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}
	if (type === 'upcoming') {
		const renderListElements = upcomingMovies?.results.map(movie => (
			<ListElement type={'upcoming'} data={movie} key={movie.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	return <ListWrapper>List</ListWrapper>;
}

export default MoviesList;
