import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { ActrosType } from '../../types/actors/actrosType';

const baseActrosMovieUrl = 'https://api.themoviedb.org/3/movie/';
const baseActrosTvSeriesUrl = 'https://api.themoviedb.org/3/tv/';

export const getMovieActros = async (movieId: string) => {
	const response = await axios.get<ActrosType>(
		`${baseActrosMovieUrl}${movieId}/credits?language=en-US%3F&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getTvSeriesActros = async (tvSeriesId: string) => {
	const response = await axios.get<ActrosType>(
		`${baseActrosTvSeriesUrl}${tvSeriesId}/credits?language=en-US%3F&api_key=${TMDB_KEY}`
	);

	return response.data;
};
