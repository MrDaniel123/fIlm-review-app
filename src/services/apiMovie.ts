import axios from 'axios';
import {
	nowPlayingUrl,
	tmdbKey,
	movieByIdUrl,
	popularMoviesUrl,
	trendingMoviesUrl,
} from './tmdbService';

import { NowPLaing } from '../types/nowPLayingType';
import { MovieById } from '../types/movieByIdType';

export const getNowPlayingMovies = async () => {
	const response = await axios.get<NowPLaing>(`${nowPlayingUrl}?&api_key=${tmdbKey}`);

	return response.data;
};

export const getMovieById = async (movieid: string) => {
	const response = await axios.get(`${movieByIdUrl}${movieid}?&api_key=${tmdbKey}`);

	return response.data;
};

export const getPopularMovies = async () => {
	const response = await axios.get(`${popularMoviesUrl}?&api_key=${tmdbKey}`);

	return response.data;
};

export const getTrendingMovies = async () => {
	const response = await axios.get(`${trendingMoviesUrl}?&api_key=${tmdbKey}`);

	return response.data;
};
