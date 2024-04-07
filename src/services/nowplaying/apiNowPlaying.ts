import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type NowPlaingMovies } from '../../types/nowPlaying/nowPlayingMoviesType';

const baseNowPlayingMoviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US';

export const getNowPlayingMovies = async (pageNumber: string) => {
	const response = await axios.get<NowPlaingMovies>(
		`${baseNowPlayingMoviesUrl}&page=${pageNumber}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
