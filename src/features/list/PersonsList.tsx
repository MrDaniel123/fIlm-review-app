import React from 'react';
import styled from 'styled-components';

import { useNowPlayingMovieMovies } from '../../hooks/nowPlaying/useNowPlayingMovies';
import { usePopularMovies } from '../../hooks/popular/usePopularMovies';
import { useTopRatedMovies } from '../../hooks/topRated/useTopRatedMovies';

import ListElement from './ListElement';
import { useUpComingMovies } from '../../hooks/upcoming/useUpcomingMovies';
import { usePopularActros } from '../../hooks/popular/usePopularActros';

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
	type: 'popular';
};

function PersonsList({ type }: ListProps) {
	const { data: popularActros } = usePopularActros();

	if (type === 'popular') {
		const renderListElements = popularActros?.results.map(actor => (
			<ListElement type={'persons'} data={actor} key={actor.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	return <ListWrapper>List</ListWrapper>;
}

export default PersonsList;
