import React from 'react';
import styled from 'styled-components';

import { useNowPlayingMovieMovies } from '../../hooks/nowPlaying/useNowPlayingMovies';
import { usePopularMovies } from '../../hooks/popular/usePopularMovies';
import { useTopRatedMovies } from '../../hooks/topRated/useTopRatedMovies';

import ListElement from './ListElement';
import { useUpComingMovies } from '../../hooks/upcoming/useUpcomingMovies';
import { useParams } from 'react-router-dom';
import Pagination from '../../ui/Pagination';

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
	const { pageNumber } = useParams();

	const { data: popularMovies } = usePopularMovies(pageNumber ? pageNumber : '1');
	const { data: nowPlayingMovies } = useNowPlayingMovieMovies(pageNumber ? pageNumber : '1');
	const { data: topRatedMovies } = useTopRatedMovies(pageNumber ? pageNumber : '1');
	const { data: upcomingMovies } = useUpComingMovies(pageNumber ? pageNumber : '1');

	if (type === 'nowPlaying' && nowPlayingMovies) {
		const renderListElements = nowPlayingMovies.results.map(movie => (
			<ListElement type={'nowPlaying'} data={movie} key={movie.id} />
		));

		return (
			<>
				<ListWrapper>{renderListElements}</ListWrapper>
				<Pagination
					totalPages={nowPlayingMovies.total_pages > 500 ? 500 : nowPlayingMovies.total_pages}
					actualPage={pageNumber!}
					linkTo={'movies/nowPlaying'}
				/>
			</>
		);
	}
	if (type === 'popular' && popularMovies) {
		const renderListElements = popularMovies.results.map(movie => (
			<ListElement type={'popular'} data={movie} key={movie.id} />
		));

		return (
			<>
				<ListWrapper>{renderListElements}</ListWrapper>
				<Pagination
					totalPages={popularMovies.total_pages > 500 ? 500 : popularMovies.total_pages}
					actualPage={pageNumber!}
					linkTo={'movies/popular'}
				/>
			</>
		);
	}

	if (type === 'topRated' && topRatedMovies) {
		const renderListElements = topRatedMovies.results.map(movie => (
			<ListElement type={'topRated'} data={movie} key={movie.id} />
		));

		return (
			<>
				<ListWrapper>{renderListElements}</ListWrapper>
				<Pagination
					totalPages={topRatedMovies.total_pages > 500 ? 500 : topRatedMovies.total_pages}
					actualPage={pageNumber!}
					linkTo={'movies/topRated'}
				/>
			</>
		);
	}
	if (type === 'upcoming' && upcomingMovies) {
		const renderListElements = upcomingMovies.results.map(movie => (
			<ListElement type={'upcoming'} data={movie} key={movie.id} />
		));

		return (
			<>
				<ListWrapper>{renderListElements}</ListWrapper>
				<Pagination
					totalPages={upcomingMovies.total_pages > 500 ? 500 : upcomingMovies.total_pages}
					actualPage={pageNumber!}
					linkTo={'movies/upcoming'}
				/>
			</>
		);
	}

	return <ListWrapper>List</ListWrapper>;
}

export default MoviesList;
