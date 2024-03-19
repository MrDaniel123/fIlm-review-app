import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type NowPlaingMovies } from '../../types/nowPlaying/nowPlayingMoviesType';

const baseNowPlayingMoviesUrl =
	'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const getNowPlayingMovies = async () => {
	const response = await axios.get<NowPlaingMovies>(
		`${baseNowPlayingMoviesUrl}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
