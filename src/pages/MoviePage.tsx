import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieById } from '../hooks/useMovieById';

import ReviewCard from '../features/mainReviewCard/ReviewCard';

function MoviePage() {
	const movieId = useParams();
	const { data, isError, isLoading } = useMovieById(movieId.movieId);
	console.log(data);

	if (isLoading) return <div>Loading</div>;
	return <ReviewCard data={data}></ReviewCard>;
}

export default MoviePage;
