import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type RecomendationsMovies } from '../../types/recomendations/recomendationsMovieType';
import { type RecomendationsTvSeries } from '../../types/recomendations/recomendationsTvSeriesType';

const baseMovieUrl = 'https://api.themoviedb.org/3/movie/';
const baseTvSeriesUrl = 'https://api.themoviedb.org/3/tv/';

export const getRecomendationsMovies = async (movieId: string) => {
	const response = await axios.get<RecomendationsMovies>(
		`${baseMovieUrl}${movieId}/recommendations?language=en-US&page=1&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getRecomendationsTvSeries = async (tvSeriesid: string) => {
	const response = await axios.get<RecomendationsTvSeries>(
		`${baseTvSeriesUrl}${tvSeriesid}/recommendations?language=en-US&page=1?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
