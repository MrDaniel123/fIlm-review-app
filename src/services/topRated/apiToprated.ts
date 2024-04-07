import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type TopRatedMovies } from '../../types/topRated/movies';
import { type TopRatedTvSeries } from '../../types/topRated/tvSeries';

const baseTopRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US';

const baseTopRatedTvSeriesUrl = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US';

export const getTopratedMovies = async (pageNumber: string) => {
	const response = await axios.get<TopRatedMovies>(
		`${baseTopRatedMoviesUrl}&page=${pageNumber}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getTopRatedTvSeries = async (pageNumber: string) => {
	const response = await axios.get<TopRatedTvSeries>(
		`${baseTopRatedTvSeriesUrl}&page=${pageNumber}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
