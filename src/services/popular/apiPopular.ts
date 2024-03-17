import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type PopulatMovies } from '../../types/popular/movies';
import { type PopularActros } from '../../types/popular/actros';

const basePopularMoviesUrl =
	'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=';

const baseUrlTvSeries =
	'https://api.themoviedb.org/3/person/popular?language=en-US&page=1?&api_key=';

export const getPopularMovies = async () => {
	const response = await axios.get<PopulatMovies>(`${basePopularMoviesUrl}${TMDB_KEY}`);

	return response.data;
};

export const getPopularActros = async () => {
	const response = await axios.get<PopularActros>(`${baseUrlTvSeries}${TMDB_KEY}`);

	return response.data;
};
