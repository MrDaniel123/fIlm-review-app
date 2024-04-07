import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type TopRatedMovies } from '../../types/topRated/movies';
import { type TopRatedTvSeries } from '../../types/topRated/tvSeries';

const baseTopRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

const baseTopRatedTvSeriesUrl = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';

export const getTopratedMovies = async () => {
	const response = await axios.get<TopRatedMovies>(`${baseTopRatedMoviesUrl}?&api_key=${TMDB_KEY}`);

	return response.data;
};

export const getTopRatedTvSeries = async () => {
	const response = await axios.get<TopRatedTvSeries>(
		`${baseTopRatedTvSeriesUrl}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
