import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type PopulatMovies } from '../../types/popular/movies';
import { type PopularActros } from '../../types/popular/actros';
import { type PopularTvSeries } from '../../types/popular/tvSeries';

const basePopularMoviesUrl =
	'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=';

const basePopularActrosUrl =
	'https://api.themoviedb.org/3/person/popular?language=en-US&page=1?&api_key=';

const basePopularTvSeriesUrl =
	'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=';

export const getPopularMovies = async () => {
	const response = await axios.get<PopulatMovies>(`${basePopularMoviesUrl}${TMDB_KEY}`);

	return response.data;
};

export const getPopularActros = async () => {
	const response = await axios.get<PopularActros>(`${basePopularActrosUrl}${TMDB_KEY}`);

	return response.data;
};

export const getPopularTvSeries = async () => {
	const response = await axios.get<PopularTvSeries>(`${basePopularTvSeriesUrl}${TMDB_KEY}`);

	return response.data;
};
