import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieById } from '../hooks/useMovieById';

import HeaderCard from '../features/headerCard/HeaderCard';
import styled from 'styled-components';
import { useActrosFromMovie } from '../hooks/useActrosFromMovie';

const StyledMoviePage = styled.div`
	display: flex;
	justify-content: center;
	height: 300vh;
`;

function MoviePage() {
	const movieId = useParams();
	const { data: movie, isError, isLoading } = useMovieById(movieId!.movieId!);
	const { data: actros } = useActrosFromMovie(movieId!.movieId!);
	console.log(actros);

	if (isLoading) return <div>Loading</div>;
	return <StyledMoviePage>{movie && <HeaderCard data={movie}></HeaderCard>}</StyledMoviePage>;
}

export default MoviePage;
