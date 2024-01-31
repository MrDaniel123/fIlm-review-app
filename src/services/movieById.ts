import axios from 'axios';

import { MovieById } from '../types/movieByIdType';

const apiKey = process.env.REACT_APP_API_KEY;

export const movieById = async (movieId: string | undefined) => {
	const res = await axios.get<MovieById>(
		`https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}`
	);
	return res.data;
};
