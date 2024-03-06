import axios from 'axios';
import {
	NowPlayingMovieUrl,
	tmdbKey,
	movieByIdUrl,
	popularMoviesUrl,
	trendingMoviesUrl,
	actrosFromMovieUrl,
} from './tmdbService';

import { NowPlaingMovie } from '../types/nowPLayingMovieType';
import { ActrosListType } from '../types/actorsListType';
import { MovieById } from '../types/movieByIdType';

export const getNowPlayingMovieMovies = async () => {
	const response = await axios.get<NowPlaingMovie>(`${NowPlayingMovieUrl}?&api_key=${tmdbKey}`);

	return response.data;
};

export const getMovieById = async (movieId: string) => {
	const response = await axios.get<MovieById>(`${movieByIdUrl}${movieId}?&api_key=${tmdbKey}`);

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

export const getActrosFromMovie = async (movieId: string) => {
	const response = await axios.get<ActrosListType>(
		`${actrosFromMovieUrl}${movieId}/credits?language=en-US%3F&api_key=${tmdbKey}`
	);

	return response.data;
};
