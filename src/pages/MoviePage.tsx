import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieById } from '../hooks/useMovieById';

function MoviePage() {
	const movieId = useParams();
	const { data, isError, isLoading } = useMovieById(movieId.movieId);
	console.log(data);

	return <div>MoviePage</div>;
}

export default MoviePage;
