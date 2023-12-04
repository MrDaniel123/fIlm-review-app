import React from 'react';
import { useParams } from 'react-router-dom';

function MoviePage() {
	const movieId = useParams();
	console.log(movieId);

	return <div>MoviePage</div>;
}

export default MoviePage;
