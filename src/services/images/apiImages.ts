import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { ImagesType } from '../../types/images/imagesType';

const baseMovieUrl = 'https://api.themoviedb.org/3/movie/';
const baseTvSeriesUrl = 'https://api.themoviedb.org/3/tv/';

export const getMoviesImage = async (movieId: string) => {
	const response = await axios.get<ImagesType>(
		`${baseMovieUrl}${movieId}/images?&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getTvSeriesImage = async (tvSeriesId: string) => {
	const response = await axios.get<ImagesType>(
		`${baseTvSeriesUrl}${tvSeriesId}/images?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
