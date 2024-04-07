import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type UpcomingMovies } from '../../types/upcoming/upcomingMovies';

const baseUpcomingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US';

export const getUpcomingMovies = async (pageNumber: string) => {
	const response = await axios.get<UpcomingMovies>(
		`${baseUpcomingMoviesUrl}&page=${pageNumber}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
