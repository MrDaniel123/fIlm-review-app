import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type SimilarMovies } from '../../types/similar/similarMovies';
import { type SimilarTvSeries } from '../../types/similar/similarTvSeries';

const baseMovieUrl = 'https://api.themoviedb.org/3/movie/';
const baseTvSeriesUrl = 'https://api.themoviedb.org/3/tv/';

export const getSimilarMowies = async (movieId: string) => {
	const response = await axios.get<SimilarMovies>(
		`${baseMovieUrl}${movieId}/similar?language=en-US&page=1?&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getSimilarTvSeries = async (tvSeriesid: string) => {
	const response = await axios.get<SimilarTvSeries>(
		`${baseTvSeriesUrl}${tvSeriesid}/similar?language=en-US&page=1?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
