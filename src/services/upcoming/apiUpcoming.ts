import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type UpcomingMovies } from '../../types/upcoming/upcomingMovies';

const baseUpcomingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const getUpcomingMovies = async () => {
	const response = await axios.get<UpcomingMovies>(`${baseUpcomingMoviesUrl}?&api_key=${TMDB_KEY}`);

	return response.data;
};
