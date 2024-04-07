import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type PopulatMovies } from '../../types/popular/movies';
import { type PopularActros } from '../../types/popular/actros';
import { type PopularTvSeries } from '../../types/popular/tvSeries';

const basePopularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US';

const basePopularActrosUrl = 'https://api.themoviedb.org/3/person/popular?language=en-US';

const basePopularTvSeriesUrl = 'https://api.themoviedb.org/3/tv/popular?language=en-US';

export const getPopularMovies = async (pageNumber: string) => {
	const response = await axios.get<PopulatMovies>(
		`${basePopularMoviesUrl}&page=${pageNumber}&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getPopularActros = async (pageNumber: string) => {
	const response = await axios.get<PopularActros>(
		`${basePopularActrosUrl}&page=${pageNumber}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getPopularTvSeries = async (pageNumber: string) => {
	const response = await axios.get<PopularTvSeries>(
		`${basePopularTvSeriesUrl}&page=${pageNumber}&api_key=${TMDB_KEY}`
	);

	return response.data;
};
