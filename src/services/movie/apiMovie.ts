import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { MovieType } from '../../types/movie/movieType';

const baseMovieUrl = 'https://api.themoviedb.org/3/movie/';

export const getMovie = async (movieId: string) => {
	const response = await axios.get<MovieType>(`${baseMovieUrl}${movieId}?&api_key=${TMDB_KEY}`);

	return response.data;
};
