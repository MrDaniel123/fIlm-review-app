import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieById } from '../hooks/useMovieById';

import HeaderCard from '../features/headerCard/HeaderCard';
import styled from 'styled-components';

const StyledMoviePage = styled.div`
	display: flex;
	justify-content: center;
`;

function MoviePage() {
	const movieId = useParams();
	const { data, isError, isLoading } = useMovieById(movieId!.movieId!);

	if (isLoading) return <div>Loading</div>;
	return (
		<StyledMoviePage>
			<HeaderCard data={data}></HeaderCard>
		</StyledMoviePage>
	);
}

export default MoviePage;
