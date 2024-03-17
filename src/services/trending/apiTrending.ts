import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type TrendingMovies } from '../../types/trending/movies';
import { type TrendingTvSeries } from '../../types/trending/tvSeries';

const baseTrendingMoviesUrl =
	'https://api.themoviedb.org/3/trending/movie/day?language=en-US?&api_key=';

const baseTrendingtvSeriesUrl =
	'https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=';

export const getTrendingMovies = async () => {
	const response = await axios.get<TrendingMovies>(`${baseTrendingMoviesUrl}${TMDB_KEY}`);

	return response.data;
};

export const getTrendingTvSeries = async () => {
	const response = await axios.get<TrendingTvSeries>(`${baseTrendingtvSeriesUrl}${TMDB_KEY}`);

	return response.data;
};
