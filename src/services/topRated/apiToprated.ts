import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type TopRatedMovies } from '../../types/topRated/topRated';

const baseTopRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const getTopratedMovies = async () => {
	const response = await axios.get<TopRatedMovies>(`${baseTopRatedMoviesUrl}?&api_key=${TMDB_KEY}`);

	return response.data;
};
